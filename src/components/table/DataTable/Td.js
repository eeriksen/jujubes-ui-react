import React from "react";
import styles from "./styles.scss";

export const Td = ({ colSpan, onClick, children }) => {
    return (
        <td className={styles.col} colSpan={colSpan} onClick={() => (onClick ? onClick() : null)}>
            {children}
        </td>
    );
};
