import React from "react";
import styles from "./ComponentWrapper.scss";

export const ComponentWrapper = ({ children }) => {
    return <div className={styles.base}>{children}</div>;
};
