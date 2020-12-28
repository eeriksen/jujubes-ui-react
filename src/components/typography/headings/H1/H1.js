import React from "react"
import styles from "./H1.scss"


export const H1 = ({children}) => {
    return (
        <h1 className={styles.base}>
            {children}
        </h1>
    )
};
