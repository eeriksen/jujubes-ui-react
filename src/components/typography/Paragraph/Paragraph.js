import React from "react";
import classNames from "classnames";
import styles from "./styles.scss";

export const Paragraph = ({ spacing, align, children }) => {
    return (
        <p
            className={classNames(styles.base, {
                [styles.alignCenter]: align === "center",
                [styles.spacingNone]: spacing === "none"
            })}
        >
            {children}
        </p>
    );
};
