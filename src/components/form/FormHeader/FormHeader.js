import React from "react";
import styles from "./FormHeader.scss";
export const FormHeader = ({ title, description, children }) => {
    return (
        <div className={styles.base}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.description}>{description}</div>
            <div className={styles.content}>{children}</div>
        </div>
    );
};
