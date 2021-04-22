import React from "react";
import classNames from "classnames";
import styles from "./Section.scss";

export const Section = ({ children, spacing, align }) => {
    return <div className={classNames(styles.base, {
        [styles.spacingNone]: spacing === "none",
        [styles.spacingNone]: spacing === "small",
        [styles.spacingLarge]: spacing === "large",

        [styles.alignCenter]: align === "center",
        [styles.alignRight]: align === "right"
    })}>{children}</div>;
};
