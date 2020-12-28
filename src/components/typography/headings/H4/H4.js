import React from "react"
import styles from "./H4.scss"


export const H4 = ({children}) => {
    return (
        <h4 className={styles.base}>
            {children}
        </h4>
    )
};
