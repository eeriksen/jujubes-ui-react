import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Clickable = (props) => {
    const { inline, children, link, onClick, className } = props;

    const tagType = link ? Link : inline ? "span" : "div";
    return React.createElement(tagType, {
        children,
        link,
        onClick,
        className,
        to: link
    });
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
