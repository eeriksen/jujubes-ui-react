import React from "react";
import styles from "./ComponentWrapper.scss";

export const ComponentWrapper = ({ children, height }) => {
    return (
        <div className={styles.base} style={{ height }}>
            {children}
        </div>
    );
};
