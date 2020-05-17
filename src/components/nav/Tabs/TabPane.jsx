import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"


export const TabPane = ({children, className}) => {
    const classes = classNames(styles.pane, className);
    return children ? (
        <div className={classes}>
            {children}
        </div>
    ) : null;
}
