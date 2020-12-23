import React from "react"
import styles from "./styles.scss"


export const ComponentWrapper = ({children}) => {
    return (
        <div className={styles.base}>
            {children}
        </div>
    )
};
