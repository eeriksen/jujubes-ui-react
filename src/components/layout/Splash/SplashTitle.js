import React from "react";
import styles from "./SplashTitle.scss";

export const SplashTitle = ({ logo, children }) => {
    return (
        <div className={styles.title}>
            {logo ? <div className={styles.logo}>{logo}</div> : null}
            <div className={styles.wrapper}>{children}</div>
        </div>
    );
};
