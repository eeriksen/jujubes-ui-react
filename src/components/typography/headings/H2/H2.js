import React from "react"
import styles from "./styles.scss"


export const H2 = ({children}) => {
    return (
        <h2 className={styles.base}>
            {children}
        </h2>
    )
};
