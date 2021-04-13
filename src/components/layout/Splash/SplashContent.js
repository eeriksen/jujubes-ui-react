import React from "react";
import styles from "./SplashContent.scss";

export const SplashContent = ({ children }) => {
    return (
        <div className={styles.content}>
            <div className={styles.wrapper}>{children}</div>
        </div>
    );
};
