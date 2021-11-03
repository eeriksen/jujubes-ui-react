import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Text.scss";
import { capitalize } from "../../../utils/stringUtils";

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
    shadow,
    backgroundColor,
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
                [styles.sizeH4]: size === "h4",
                [styles.sizeH3]: size === "h3",
                [styles.sizeH2]: size === "h2",
                [styles.sizeH1]: size === "h1",

                [styles.strikeThrough]: strikeThrough,
                [styles.lowercase]: lowercase,
                [styles.underline]: underline,
                [styles.italic]: italic,

                [styles.shadowRegular]: shadow === "regular",
                [styles.shadowMedium]: shadow === "medium",
                [styles.shadowLarge]: shadow === "large",

                [color && styles[`color${capitalize(color)}`]]: color,
                [backgroundColor && styles[`background${capitalize(backgroundColor)}`]]: backgroundColor
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
    color: PropTypes.oneOf(["base", "primary", "accent", "contrast", "success", "warning", "error", "info"]),
    opacity: PropTypes.number,
    weight: PropTypes.oneOf(["light", "medium", "bold"]),
    size: PropTypes.oneOf(["small", "normal", "medium", "large", "h4", "h3", "h2", "h1"]),
    width: PropTypes.string,
    strikeThrough: PropTypes.bool,
    lowercase: PropTypes.bool,
    underline: PropTypes.bool,
    italic: PropTypes.bool,
    shadow: PropTypes.oneOf(["regular", "medium", "large"]),
    backgroundColor: PropTypes.oneOf(["base", "primary", "accent", "contrast", "success", "warning", "error", "info"]),
    children: PropTypes.any
};
