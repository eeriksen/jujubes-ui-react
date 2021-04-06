import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./DataTable.scss";

import { Spinner } from "../../loader/Spinner";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";

export const DataTable = ({
    rows,
    children,
    onRowClick,
    busy,
    loading,
    rowModifiers
}) => {
    const tableRef = useRef();
    const [overflowLeft, setOverflowLeft] = useState(false);
    const [overflowRight, setOverflowRight] = useState(false);

    useEffect(() => {
        updateOverflowIndicators();
    }, []);

    const updateOverflowIndicators = () => {
        if (tableRef.current) {
            const { scrollLeft, scrollWidth } = tableRef.current;
            const containerWidth = Math.floor(tableRef.current.getBoundingClientRect().width);
            setOverflowLeft(scrollLeft > 0);
            setOverflowRight(
                scrollWidth - containerWidth > 1 && scrollLeft < scrollWidth - containerWidth
            );
        }
    };

    return (
        <div className={styles.base}>
            <div className={styles.wrapper}>
                {/* Loader */}
                {busy ? (
                    <div className={styles.loader}>
                        <Spinner />
                    </div>
                ) : null}

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

                {/* Table */}
                <div
                    ref={tableRef}
                    className={styles.container}
                    onScroll={updateOverflowIndicators}
                >
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
