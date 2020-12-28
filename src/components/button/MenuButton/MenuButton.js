import React from "react"
import styles from "./MenuButton.scss"

import { Clickable } from "../Clickable"

export const MenuButton = (props) => {
    return (
        <Clickable {...props} className={styles.base}>
            <div className={styles.wrapper}>
                <span />
                <span />
                <span />
            </div>
        </Clickable>
    )
}
