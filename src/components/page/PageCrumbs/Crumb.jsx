import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"

import { Clickable } from "../../button/Clickable"

export const Crumb = ({ link, label, current }) => {
    return (
        <div className={classNames(styles.item, {
            [styles.current]: current
        })}>
            <Clickable block className={styles.label} link={link}>
                {label}
            </Clickable>
        </div>
    )
}
