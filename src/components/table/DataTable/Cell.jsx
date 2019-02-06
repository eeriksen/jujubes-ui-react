import React from "react"
import ReactDOM from "react-dom"
import classNames from "classnames"
import styles from "./styles.scss"

import Textarea from 'react-textarea-autosize'


export default class Cell extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            editMode: false
        }
    }


    /**
     * Cell clicked
     * @private
     */
    _handleCellClick = () => {

        // Properties
        const { editable } = this.props;

        if(editable){
            this.setState({
                editMode: true
            }, () => {

                // Focus cell input
                const cellInput = ReactDOM.findDOMNode(this.refs.cellInput);
                cellInput.focus();
            });
        }
    };


    /**
     * Handle change
     * @param value
     * @private
     */
    _handleChange = (value) => {
        if(this.props.onChange){
            this.props.onChange(value);
        }
    };


    render(){

        // Variables
        const { editMode } = this.state;

        // Properties
        const { row, col, align } = this.props;

        // Classes
        const classes = classNames(styles.cell, {
            [styles.alignRight]: align === "right",
            [styles.editMode]: editMode
        });

        // Value
        const value = this.props.children ? this.props.children : (
            row && col ? Object.byString(row, col) : null
        );

        return !editMode ? (
            <div className={classes} onClick={this._handleCellClick}>
                {value}
            </div>
        ) : (
            <div className={classes}>
                <Textarea
                    ref="cellInput"
                    className={styles.input}
                    value={value || ''}
                    onChange={(e) => this._handleChange(e.target.value)}
                    onBlur={() => this.setState({editMode: false})}
                />
            </div>
        )
    }


}
