import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./styles.scss";

import { WindowResizeListener } from "../../layout/WindowResizeListener";
import { Spinner } from "../../loader/Spinner";
import { TableHead } from "./parts/TableHead";
import { TableBody } from "./parts/TableBody";

export const DataTable = ({ rows, children, onRowClick, busy, rowModifiers }) => {
    const redrawTimeout = useRef();
    const wrapperRef = useRef();
    const [tableHeight, setTableHeight] = useState(0);

    useEffect(() => {
        updateHeightDebounce();
        return () => {
            clearTimeout(redrawTimeout.current);
        };
    }, []);

    const updateHeight = () => {
        const wrapperHeight = wrapperRef.current.getBoundingClientRect().height;
        setTableHeight(wrapperHeight + 2);
    };

    const updateHeightDebounce = () => {
        clearTimeout(redrawTimeout.current);
        redrawTimeout.current = setTimeout(updateHeight, 500);
    };

    return (
        <div className={styles.base} style={{ height: `${tableHeight}px` }}>
            {/* Loader */}
            {busy ? (
                <div className={styles.loader}>
                    <Spinner className={styles.spinner} />
                </div>
            ) : null}

            {/* Table */}
            <div ref={wrapperRef} className={styles.wrapper}>
                <table
                    className={classNames(styles.table, {
                        [styles.clickable]: onRowClick
                    })}
                >
                    <TableHead children={children} />
                    <TableBody rows={rows} onRowClick={onRowClick} rowModifiers={rowModifiers}>
                        {children}
                    </TableBody>
                </table>
            </div>

            <WindowResizeListener onResize={updateHeightDebounce} />
        </div>
    );
};

DataTable.propTypes = {
    /**
     * Array of data to list in table
     */
    rows: PropTypes.array,
    /**
     * Callback for when a row is clicked. Returns the respective rows data
     */
    onRowClick: PropTypes.func,
    /**
     * Apply modifiers to rows.
     */
    rowModifiers: PropTypes.object,
    /**
     * Disable table interaction and show spinner
     */
    busy: PropTypes.bool,
    /**
     * Content of table. Consists of "Column" or "Tr" elements.
     */
    children: PropTypes.any
};
