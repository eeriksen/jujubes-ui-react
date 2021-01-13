import React from "react";
import { Column } from "../Column";
import styles from "./TableHead.scss";

export const TableHead = ({ columns }) => {
    return (
        <thead className={styles.head}>
            <tr>
                {React.Children.map(columns, (column, index) =>
                    column.type === Column ? <th key={index}>{column.props.label}</th> : null
                )}
            </tr>
        </thead>
    );
};
