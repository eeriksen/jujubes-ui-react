import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Callout.scss";

export const Callout = ({ color, title, children }) => {
    return (
        <div
            className={classNames(styles.base, {
                [styles.info]: color === "info",
                [styles.success]: color === "success",
                [styles.warning]: color === "warning",
                [styles.error]: color === "error"
            })}
        >
            {/* Title */}
            {title ? <div className={styles.title}>{title}</div> : null}

            {/* Message */}
            <div className={styles.message}>{children}</div>
        </div>
    );
};

Callout.propTypes = {
    /**
     * Color of the call out
     */
    color: PropTypes.oneOf(["info", "success", "warning", "error"]),
    /**
     * Title of the call out
     */
    title: PropTypes.string,
    /**
     * Content of the call out
     */
    children: PropTypes.any
};
