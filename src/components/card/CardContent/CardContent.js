import React from "react"
import styles from "./CardContent.scss"


export const CardContent = (props) => {
    return (
        <div className={styles.base}>
            {props.children}
        </div>
    )
}
