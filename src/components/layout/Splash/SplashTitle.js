import React from "react";
import styles from "./SplashTitle.scss";

export const SplashTitle = ({ children, description }) => {
    return (
        <div className={styles.title}>
            {children}
            {description ? <div className={styles.description}>{description}</div> : null}
        </div>
    );
};
