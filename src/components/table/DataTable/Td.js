import React from "react";
import styles from "./Tr.scss";

export const Td = ({ colSpan, onClick, children }) => {
    return (
        <td className={styles.col} colSpan={colSpan} onClick={() => (onClick ? onClick() : null)}>
            {children}
        </td>
    );
};
