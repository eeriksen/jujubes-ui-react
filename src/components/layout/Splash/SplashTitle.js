import React from "react";
import styles from "./SplashTitle.scss";

export const SplashTitle = ({ logo, background, children }) => {
    return (
        <div className={styles.title}>
            {logo ? <div className={styles.logo}>{logo}</div> : null}
            {children ? <div className={styles.wrapper}>{children}</div> : null}
            {background ? <div className={styles.background}>{background}</div> : null}
        </div>
    );
};
