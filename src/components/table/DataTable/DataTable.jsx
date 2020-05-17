import React from "react"
import PropTypes from "prop-types"
import ReactDOM from "react-dom"
import classNames from "classnames"
import styles from "./styles.scss"

import { WindowResizeListener } from "../../layout/WindowResizeListener"
import { Spinner } from "../../loader/Spinner"
import { Column } from "./Column"
import { Cell } from "./Cell"
import { Tr } from "./Tr"
import { Td } from "./Td"



export class DataTable extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            tableHeight: 0,
            expandRowIndex: null
        }
    }


    componentDidMount(){
        this._updateHeightDebounce();
    }

    componentWillUnmount() {
        clearTimeout(this.tableupdateHeightTimeout);
    }

    componentDidUpdate(){
        this._updateHeightDebounce();
    }

    /**
     * Update table height
     * @private
     */
    _updateHeight = () => {
        const wrapperElement = ReactDOM.findDOMNode(this.refs.wrapper);
        const wrapperHeight = wrapperElement.getBoundingClientRect().height;
        this.setState({
            tableHeight: wrapperHeight+2
        });
    };

    _updateHeightDebounce = () => {
        clearTimeout(this.tableupdateHeightTimeout);
        this.tableupdateHeightTimeout = setTimeout(this._updateHeight, 500);
    };


    /**
     * Handle row click
     * @private
     */
    _handleRowClick(row, index){

        // Row click callback
        if(this.props.onRowClick){
            this.props.onRowClick(row);
        }

        // Expanded row
        else if(this.props.expandedRowRender){
            this.setState({
                expandRowIndex: this.state.expandRowIndex === index ? null : index
            }, () => {

                // Redraw height
                this._updateHeight();
            });
        }
    }


    /**
     * RENDER
     * @returns {XML}
     */
    render(){

        // Properties
        const { children, onRowClick, expandedRowRender, busy, embedded, small, className, heading } = this.props;

        // Base classes
        const baseClasses = classNames(styles.base, {
            [styles.embedded]: embedded,
            [styles.small]: small
        }, className);

        // Table classes
        const tableClasses = classNames(styles.table, {
            [styles.clickable]: onRowClick || expandedRowRender
        });

        // Table body
        const tableBody = React.Children.map(children, (child) => {
            if(child){
                return React.cloneElement(child, {});
            }
        });

        // Table style
        const tableStyle = {
            height: this.state.tableHeight+"px"
        };

        return (
            <div className={baseClasses} style={tableStyle}>

                {/* Loader */}
                {busy ? (
                    <div className={styles.loader}>
                        <Spinner className={styles.spinner} />
                    </div>
                ) : null}

                {/* Table */}
                <div ref="wrapper" className={styles.wrapper}>

                    {/* Heading */}
                    {heading ? this._renderHeading() : null}

                    <table className={tableClasses}>
                        {this._renderTableHeader(tableBody)}
                        {this._renderTableBody(tableBody)}
                    </table>
                </div>

                <WindowResizeListener onResize={this._updateHeightDebounce} />
            </div>
        )
    }


    /**
     * RENDER heading
     * @returns {XML}
     * @private
     */
    _renderHeading(){
        return (
            <div className={styles.heading}>
                {this.props.heading}
            </div>
        )
    }


    /**
     * RENDER:
     * Table header
     * @param columns
     * @returns {XML}
     * @private
     */
    _renderTableHeader(columns){
        return (
            <thead>
                <tr>
                    {columns && columns.map((column, index) => column.type === Column ? (
                        <th key={index}>
                            {column.props.children}
                        </th>
                    ) : null)}
                </tr>
            </thead>
        )
    }


    /**
     * RENDER:
     * Table body
     * @param body
     * @returns {XML}
     * @private
     */
    _renderTableBody(body){

        // Variables
        const { expandRowIndex } = this.state;

        // Rows
        const { rows, emptyCell, rowModifiers, expandedRowRender } = this.props;

        // Sort static rows and dynamic columns
        let dynamicColumns = [];
        let staticRowsBefore = [];
        let staticRowsAfter = [];

        body && body.map((e) => {
            switch(e.type){
                case Column:
                    dynamicColumns.push(e); break;
                case Tr: {
                    if(dynamicColumns.length){
                        staticRowsAfter.push(e);
                    }else {
                        staticRowsBefore.push(e);
                    }
                    break;
                }
                default: {
                    return e;
                }
            }
            return e;
        });


        // Iterate dynamic rows
        let rowList = [];
        rows && rows.length && rows.map((row, rowIndex) => {

            // Should row blink
            const shouldBlink = rowModifiers && rowModifiers.blink ? rowModifiers.blink(row) : false;

            // Add row to list
            rowList.push((
                <Tr key={rowIndex} blink={shouldBlink} onClick={() => this._handleRowClick(row, rowIndex)}>
                    {dynamicColumns && dynamicColumns.map((column, colIndex) => this._renderTableCell(rowIndex, colIndex, row, column))}
                </Tr>
            ));

            // Check if row is expanded
            if(expandRowIndex !== null && expandRowIndex === rowIndex){
                rowList.push((
                    <Tr key={rowIndex+0.5} expand>
                        <Td colSpan={dynamicColumns.length}>
                            {expandedRowRender ? expandedRowRender(row, rowIndex) : null}
                        </Td>
                    </Tr>
                ));
            }

            return row;
        });

        // Iterate rows
        return (
            <tbody>

                {/* Static rows before */}
                {staticRowsBefore.length ? staticRowsBefore : null}

                {/* Dynamic rows */}
                {rowList && rowList.length ? rowList : !staticRowsBefore.length && !staticRowsAfter.length ? (
                    <Tr unclickable>
                        <Td colSpan={dynamicColumns && dynamicColumns.length}>
                            {emptyCell ? emptyCell : (<Cell>...</Cell>)}
                        </Td>
                    </Tr>
                ) : null}

                {/* Static rows after */}
                {staticRowsAfter.length ? staticRowsAfter : null}

            </tbody>
        )

    }


    /**
     * RENDER:
     * Table cell
     * @param rowIndex
     * @param colIndex
     * @param row
     * @param column
     * @returns {XML}
     * @private
     */
    _renderTableCell(rowIndex, colIndex, row, column){

        let cell = null;

        const cellParameters = {
            rowIndex: rowIndex,
            colIndex: colIndex,
            row: row,
            column: column
        };

        if(column.props.cell){
            if(typeof column.props.cell === "function"){
                cell = column.props.cell(cellParameters);
            }else {
                cell = column.props.cell ? React.cloneElement(column.props.cell, cellParameters) : null;
            }
        }

        return (
            <Td key={`${rowIndex}_${colIndex}`}>{cell}</Td>
        )
    }
}


DataTable.propTypes = {
    rows: PropTypes.array,
    onRowClick: PropTypes.func,
    expandedRowRender: PropTypes.func
};
