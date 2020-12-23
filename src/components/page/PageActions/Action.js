import React from "react";
import styles from "./styles.scss";

export const Action = ({ children }) => {
    return <div className={styles.action}>{children}</div>;
};
