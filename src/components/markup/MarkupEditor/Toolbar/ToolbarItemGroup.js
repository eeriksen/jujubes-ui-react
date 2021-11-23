import React from "react"
import styles from "./Toolbar.scss"

export const ToolbarItemGroup = ({children}) => {
    return (
        <div className={styles.group}>
            {children}
        </div>
    )
}
