import React from "react";
import styles from "./styles.scss";

export const MenuHeading = ({ children }) => {
    return <span className={styles.heading}>{children}</span>;
};
