import React from "react"
import styles from "./H2.scss"


export const H2 = ({children}) => {
    return (
        <h2 className={styles.base}>
            {children}
        </h2>
    )
};
