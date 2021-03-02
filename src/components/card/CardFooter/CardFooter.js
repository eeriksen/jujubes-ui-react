import React from "react"
import styles from "./CardFooter.scss"


export const CardFooter = ({children}) => {
    return (
        <div className={styles.base}>
            {children}
        </div>
    )
};
