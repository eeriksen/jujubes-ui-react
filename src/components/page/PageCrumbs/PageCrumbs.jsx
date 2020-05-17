import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"

export const PageCrumbs = ({children, className}) => {
    return (
        <div className={classNames(styles.base, className)}>
            <div className={styles.leftFade} />
            <div className={styles.rightFade} />
            <div className={styles.container}>
                {Object.assign([], children).reverse()}
            </div>
        </div>
    )
}
