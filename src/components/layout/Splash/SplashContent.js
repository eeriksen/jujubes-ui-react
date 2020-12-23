import React from "react";
import styles from "./styles.scss";

export const SplashContent = ({ children }) => {
    return <div className={styles.content}>{children}</div>;
};
