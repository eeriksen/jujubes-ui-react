import React from "react";
import styles from "./styles.scss";

export const SplashTitle = ({ children, description }) => {
    return (
        <div className={styles.title}>
            {children}
            {description ? <div className={styles.description}>{description}</div> : null}
        </div>
    );
};
