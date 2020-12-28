import React from "react";
import PropTypes from "prop-types";
import "./Tooltip.scss";

import "react-tippy/dist/tippy.css";
import { Tooltip as Tippy } from "react-tippy";

export const Tooltip = ({ title, position, trigger, disabled, arrow, children }) => {
    return (
        <Tippy
            title={title}
            position={position}
            trigger={trigger}
            arrow={arrow}
            disabled={disabled}
        >
            {children}
        </Tippy>
    );
};

Tooltip.defaultProps = {
    title: "This is a tooltip",
    position: "top",
    trigger: "mouseenter focus",
    arrow: true,
    disabled: false
};

Tooltip.propTypes = {
    /**
     * Tooltip text
     */
    title: PropTypes.string,
    /**
     * Position of tooltip relative to element
     */
    position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
    /**
     * How tooltip is triggered. ("mouseenter", "focus", "click", "manual")
     */
    trigger: PropTypes.string,
    /**
     * Show or hide arrow
     */
    arrow: PropTypes.bool,
    /**
     * Disable tooltip
     */
    disabled: PropTypes.bool,
    /**
     * The element that triggers the tooltip
     */
    children: PropTypes.any
};
