import React from "react";
import { Column } from "../Column";
import styles from "./TableHead.scss";

export const TableHead = ({ children }) => {
    return (
        <thead className={styles.head}>
            <tr>
                {React.Children.map(children, (column, index) =>
                    column.type === Column ? <th key={index}>{column.props.label}</th> : null
                )}
            </tr>
        </thead>
    );
};
