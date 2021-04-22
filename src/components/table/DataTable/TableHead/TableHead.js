import React from "react";
import classNames from "classnames";
import { Column } from "../Column";
import styles from "./TableHead.scss";
import { Icon } from "../../../graphic/Icon";

export const TableHead = ({ columns, onSort }) => {
    const handleColumnSort = (column, index) => {
        if (column.props.sortable) {
            let sortDirection =
                column.props.sorted && column.props.sorted === "asc" ? "desc" : "asc";
            onSort &&
                onSort({ columnProps: column.props, columnIndex: index, direction: sortDirection });
        }
    };

    return (
        <thead className={styles.head}>
            <tr>
                {React.Children.map(columns, (column, index) =>
                    column.type === Column ? (
                        <th
                            key={index}
                            className={classNames({
                                [styles.sortable]: column.props.sortable,
                                [styles.sorted]: column.props.sorted
                            })}
                            onClick={() => handleColumnSort(column, index)}
                        >
                            {column.props.label}
                            {column.props.sorted ? (
                                <div className={styles.caret}>
                                    <Icon name={column.props.sorted === "asc" ? "caret-up" : "caret-down"} />
                                </div>
                            ) : null}
                        </th>
                    ) : null
                )}
            </tr>
        </thead>
    );
};
