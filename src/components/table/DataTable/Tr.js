import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"


export const Tr = ({ blink, expand, onClick, disabled, children }) => {
    return (
        <tr className={classNames(styles.row, {
            [styles.blink]: blink,
            [styles.expand]: expand,
            [styles.disabled]: disabled
        })} onClick={() => onClick ? onClick() : null}>
            {children}
        </tr>
    )
}
