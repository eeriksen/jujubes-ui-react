import React from "react";
import styles from "./PageActions.scss";

export const Action = ({ children }) => {
    return <div className={styles.action}>{children}</div>;
};
