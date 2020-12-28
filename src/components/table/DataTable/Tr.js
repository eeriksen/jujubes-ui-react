import React from "react";
import classNames from "classnames";
import styles from "./Tr.scss";

export const Tr = ({ blink, expand, onClick, disabled, children }) => {
    const handleClick = () => {
        onClick && !disabled && onClick();
    };

    return (
        <tr
            className={classNames(styles.row, {
                [styles.blink]: blink,
                [styles.expand]: expand,
                [styles.disabled]: disabled,
                [styles.clickable]: typeof onClick === "function"
            })}
            onClick={handleClick}
        >
            {children}
        </tr>
    );
};
