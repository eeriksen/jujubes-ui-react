import React from "react";
import styles from "./Filler.scss";

export const Filler = ({ children }) => {
    return <div className={styles.base}>{children}</div>;
};
