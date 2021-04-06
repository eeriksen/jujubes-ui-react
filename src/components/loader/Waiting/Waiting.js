import React from "react"
import classNames from "classnames"
import styles from "./Waiting.scss"


export const Waiting = ({color, size}) => {

    const baseClasses = classNames(styles.base, {
        [styles.colorContrast]: color === "contrast",
        [styles.sizeMedium]: size === "medium"
    });

    return (
        <span className={baseClasses}>
            <span /><span /><span />
        </span>
    )
};
