import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./DataTable.scss";

import { WindowResizeListener } from "../../layout/WindowResizeListener";
import { Spinner } from "../../loader/Spinner";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";

export const DataTable = ({ rows, children, onRowClick, onLoadMore, busy, loading, rowModifiers }) => {
    const tableRef = useRef();
    const redrawTimeout = useRef();
    const wrapperRef = useRef();
    const [tableHeight, setTableHeight] = useState(0);
    const [overflowLeft, setOverflowLeft] = useState(false);
    const [overflowRight, setOverflowRight] = useState(false);

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
        redrawTimeout.current = setTimeout(() => {
            updateHeight();
            updateOverflowIndicators();
        }, 500);
    };

    const updateOverflowIndicators = () => {
        const { scrollLeft, scrollWidth } = tableRef.current;
        const containerWidth = Math.floor(tableRef.current.getBoundingClientRect().width);
        setOverflowLeft(scrollLeft > 0);
        setOverflowRight(scrollWidth > containerWidth && scrollLeft < scrollWidth - containerWidth);
    };

    return (
        <div className={styles.base} style={{ height: `${tableHeight}px` }}>
            {/* Overflow indicators */}
            <div
                className={classNames(styles.overflow, styles.left, {
                    [styles.visible]: overflowLeft
                })}
            />
            <div
                className={classNames(styles.overflow, styles.right, {
                    [styles.visible]: overflowRight
                })}
            />

            {/* Loader */}
            {busy ? (
                <div className={styles.loader}>
                    <Spinner />
                </div>
            ) : null}

            {/* Table */}
            <div ref={tableRef} className={styles.container} onScroll={updateOverflowIndicators}>
                <div ref={wrapperRef} className={styles.wrapper}>
                    <table className={styles.table}>
                        <TableHead columns={children} loading={loading} />
                        <TableBody
                            columns={children}
                            rows={rows}
                            onRowClick={onRowClick}
                            rowModifiers={rowModifiers}
                            loading={loading}
                        />
                    </table>
                </div>
            </div>

            {/* Load more */}
            {onLoadMore ? <div classsName={styles.loadMore}></div> : null}

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
