import React from "react";
import styles from "./SplashTitle.scss";
import { H2 } from "../../typography/headings/H2";

export const SplashTitle = ({ title, children }) => {
    return (
        <div className={styles.title}>
            <H2>{title}</H2>
            {children ? <div className={styles.description}>{children}</div> : null}
        </div>
    );
};
