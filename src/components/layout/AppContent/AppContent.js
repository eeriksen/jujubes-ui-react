import React from "react";
import styles from "./AppContent.scss";

export const AppContent = ({ children }) => {
    return (
        <div className={styles.base}>
            {children}
        </div>
    );
};
