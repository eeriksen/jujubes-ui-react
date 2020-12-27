import React from "react"
import styles from "./styles.scss"


export const H4 = ({children}) => {
    return (
        <h4 className={styles.base}>
            {children}
        </h4>
    )
};
