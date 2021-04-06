import React from "react"
import styles from "./PageButtons.scss"


export const PageButtons = ({children}) => {
    return (
        <div className={styles.base}>
            {children}
        </div>
    )
}
