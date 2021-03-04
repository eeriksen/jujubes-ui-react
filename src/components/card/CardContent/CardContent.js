import React from "react";
import classNames from "classnames";
import styles from "./CardContent.scss";
import { PropTypes } from "prop-types";

export const CardContent = ({ border, children }) => {
    return (
        <div
            className={classNames(styles.base, {
                [styles.borderTop]: border === "top",
                [styles.borderBottom]: border === "bottom"
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
