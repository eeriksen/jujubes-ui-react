import React from "react";
import styles from "./Splash.scss";

export const Splash = ({ children }) => {
    return (
        <div className={styles.base}>
            {children}
        </div>
    );
};
