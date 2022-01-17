import React from "react";
import classNames from "classnames";
import styles from "./Spinner.scss";
import PropTypes from "prop-types";

export const Spinner = ({ size, centered }) => {
    return (
        <div
            className={classNames(styles.base, {
                [styles.sizeSmall]: size === "small",
                [styles.sizeLarge]: size === "large",
                [styles.sizeAuto]: size === "auto",
                [styles.positionCentered]: centered
            })}
        >
            <svg className={styles.circular} viewBox="25 25 50 50">
                <circle className={styles.path} cx="50" cy="50" r="20" fill="none" />
            </svg>
        </div>
    );
};

Spinner.propTypes = {
    /**
     * Size of spinner
     */
    size: PropTypes.oneOf(["small", "large", "auto"])
};
