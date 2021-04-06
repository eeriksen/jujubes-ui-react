import React from "react";
import classNames from "classnames";
import styles from "./CardContent.scss";
import { PropTypes } from "prop-types";

export const CardContent = ({ border, padding, children, color }) => {
    return (
        <div
            className={classNames(styles.base, {
                [styles.borderTop]: border === "top",
                [styles.borderBottom]: border === "bottom",
                [styles.paddingNone]: padding === "none",
                [styles.colorSilent]: color === "silent"
            })}
        >
            {children}
        </div>
    );
};

CardContent.propTypes = {
    /**
     * Add a border to the top or bottom of the content to visually separate multiple
     */
    border: PropTypes.oneOf(["top", "bottom"])
};
