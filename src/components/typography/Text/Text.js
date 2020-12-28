import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Text.scss";

export const Text = ({
    block,
    truncate,
    color,
    weight,
    size,
    strikeThrough,
    lowercase,
    underline,
    italic,
    children
}) => {
    return (
        <span
            className={classNames(styles.base, {
                [styles.block]: block,
                [styles.truncate]: truncate,

                [styles.weightLight]: weight === "light",
                [styles.weightMedium]: weight === "medium",
                [styles.weightBold]: weight === "bold",

                [styles.sizeSmall]: size === "small",
                [styles.sizeNormal]: size === "normal",
                [styles.sizeMedium]: size === "medium",
                [styles.sizeLarge]: size === "large",
                [styles.sizeXlarge]: size === "xlarge",

                [styles.base]: color === "base",
                [styles.base80]: color === "base80",
                [styles.base60]: color === "base60",
                [styles.base40]: color === "base40",

                [styles.primary]: color === "primary",
                [styles.contrast]: color === "contrast",
                [styles.success]: color === "success",
                [styles.warning]: color === "warning",
                [styles.error]: color === "error",
                [styles.info]: color === "info",

                [styles.strikeThrough]: strikeThrough,
                [styles.lowercase]: lowercase,
                [styles.underline]: underline,
                [styles.italic]: italic
            })}
        >
            {children}
        </span>
    );
};

Text.propTypes = {
    block: PropTypes.bool,
    truncate: PropTypes.bool,
    color: PropTypes.oneOf([
        "base",
        "base80",
        "base60",
        "base40",
        "primary",
        "contrast",
        "success",
        "warning",
        "error",
        "info"
    ]),
    weight: PropTypes.oneOf(["light", "medium", "bold"]),
    size: PropTypes.oneOf(["small", "normal", "medium", "large", "xlarge"]),
    strikeThrough: PropTypes.bool,
    lowercase: PropTypes.bool,
    underline: PropTypes.bool,
    italic: PropTypes.bool,
    children: PropTypes.any
};
