import React from "react";
import styles from "./KeyValueList.scss";

export const Item = ({ label, children }) => {
    return (
        <tr className={styles.row}>
            <td className={styles.key}>{label}</td>
            <td className={styles.value}>{children}</td>
        </tr>
    );
};
