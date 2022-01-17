import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Clickable.scss";

export const Clickable = ({
    inline,
    children,
    link,
    replace,
    onClick,
    className,
    title,
    style
}) => {
    const tagType = link ? Link : inline ? "span" : "div";
    return React.createElement(tagType, {
        children,
        link,
        onClick,
        className: classNames(styles.base, {
            [styles.isClickable]: link || onClick
        }, className),
        to: link,
        ...(link && { replace: replace }),
        title,
        style
    });
};

Clickable.defaultProps = {
    replace: false
};

Clickable.propTypes = {
    /**
     * Inlined element (span)
     */
    inline: PropTypes.bool,

    /**
     * React router link
     */
    link: PropTypes.string,

    /**
     * Replace route change
     */
    replace: PropTypes.bool,

    /**
     * Click handler
     */
    onClick: PropTypes.func,

    /**
     * HTML link
     */
    href: PropTypes.string,

    /**
     * Link target
     */
    target: PropTypes.string,

    /**
     * Custom class name
     */
    className: PropTypes.string
};
