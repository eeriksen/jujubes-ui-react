import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Text.scss";

export const Text = ({
    block,
    truncate,
    color,
    opacity,
    weight,
    size,
    width,
    strikeThrough,
    lowercase,
    underline,
    italic,
    children
}) => {
    const childrenWithProps = opacity !== null ? React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
            return React.createElement("span", {
                style: {
                    opacity: !isNaN(opacity) ? opacity / 100 : null
                }
            }, child);
        } else {
            return child;
        }
    }) : children;

    return React.createElement(
        block ? "div" : "span",
        {
            className: classNames(styles.base, {
                [styles.truncate]: truncate,

                [styles.weightLight]: weight === "light",
                [styles.weightMedium]: weight === "medium",
                [styles.weightBold]: weight === "bold",

                [styles.sizeSmall]: size === "small",
                [styles.sizeNormal]: size === "normal",
                [styles.sizeMedium]: size === "medium",
                [styles.sizeLarge]: size === "large",
                [styles.sizeXlarge]: size === "xlarge",

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
            }),
            style: {
                width
            }
        },
        childrenWithProps
    );
};

Text.propTypes = {
    block: PropTypes.bool,
    truncate: PropTypes.bool,
    color: PropTypes.oneOf(["primary", "contrast", "success", "warning", "error", "info"]),
    opacity: PropTypes.number,
    weight: PropTypes.oneOf(["light", "medium", "bold"]),
    size: PropTypes.oneOf(["small", "normal", "medium", "large", "xlarge"]),
    width: PropTypes.string,
    strikeThrough: PropTypes.bool,
    lowercase: PropTypes.bool,
    underline: PropTypes.bool,
    italic: PropTypes.bool,
    children: PropTypes.any
};
