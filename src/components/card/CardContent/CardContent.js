import React from "react"
import styles from "./styles.scss"


export const CardContent = (props) => {
    return (
        <div className={styles.base}>
            {props.children}
        </div>
    )
}
