import React from "react";
import classNames from "classnames";
import styles from "./Cell.scss";

export const Cell = ({ align, children }) => {
    return (
        <div
            className={classNames(styles.cell, {
                [styles.alignRight]: align === "right",
                [styles.alignCenter]: align === "center"
            })}
        >
            {children}
        </div>
    );
};
