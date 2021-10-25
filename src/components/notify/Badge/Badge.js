import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Badge.scss";

export const Badge = ({ fill, size, spacing, color, number, children }) => {
    return (
        <span
            className={classNames(styles.base, {
                [styles.primary]: color === "primary",
                [styles.accent]: color === "accent",
                [styles.info]: color === "info",
                [styles.success]: color === "success",
                [styles.warning]: color === "warning",
                [styles.error]: color === "error",
                [styles.contrast]: color === "contrast",
                [styles.silent]: color === "silent",

                [styles.small]: size === "small",

                [styles.spacingLeft]: spacing && spacing.indexOf("left") >= 0,
                [styles.spacingRight]: spacing && spacing.indexOf("right") >= 0,

                [styles.fill]: fill,
                [styles.number]: number
            })}
        >
            {children}
        </span>
    );
};

Badge.propTypes = {
    /**
     * Fill with solid color
     */
    fill: PropTypes.bool,
    /**
     * Change size of badge
     */
    size: PropTypes.oneOf(["small"]),
    /**
     * Set color of bage
     */
    color: PropTypes.oneOf([
        "primary",
        "accent",
        "info",
        "success",
        "warning",
        "error",
        "contrast",
        "silent"
    ]),
    /**
     * Adapt to display number
     */
    number: PropTypes.bool,
    /**
     * Add spacing to badge (left/right)
     */
    spacing: PropTypes.array,
    /**
     * Content of badge
     */
    children: PropTypes.any
};
