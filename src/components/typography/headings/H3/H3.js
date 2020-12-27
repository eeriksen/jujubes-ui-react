import React from "react"
import styles from "./styles.scss"


export const H3 = ({children}) => {
    return (
        <h3 className={styles.base}>
            {children}
        </h3>
    )
};
