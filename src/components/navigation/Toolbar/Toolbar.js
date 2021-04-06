import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Toolbar.scss";

export const Toolbar = ({ children, color }) => {
    return (
        <div
            className={classNames(styles.base, {
                [styles.colorPrimary]: color === "primary"
            })}
        >
            {children}
        </div>
    );
};

Toolbar.propTypes = {
    /**
     * Color theme of the toolbar.
     */
    color: PropTypes.oneOf(["primary"])
}
