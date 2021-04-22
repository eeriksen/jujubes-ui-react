import React from "react"
import styles from "./SectionTitle.scss"


export const SectionTitle = ({ title, description }) => {
    return (
        <div className={styles.base}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.description}>{description}</div>
        </div>
    );
};
