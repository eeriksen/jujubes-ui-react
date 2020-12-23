import React from "react"
import styles from "./styles.scss"

export const Option = ({value, children}) => {
    return (
        <option value={value} className={styles.option}>
            {children}
        </option>
    )
}
