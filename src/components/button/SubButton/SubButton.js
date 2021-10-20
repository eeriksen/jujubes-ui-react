import React from "react"
import classNames from "classnames"
import styles from "./SubButton.scss"

import { Clickable } from "../Clickable"
import { Icon } from "../../graphic/Icon"

export const SubButton = ({ active, onClick }) =>  {

    // Classes
    const classes = classNames(styles.base, {
        [styles.active]: active
    });

    return (
        <Clickable className={classes} onClick={onClick}>
            <Icon className={styles.icon} name="menu-dots" />
        </Clickable>
    )
}
