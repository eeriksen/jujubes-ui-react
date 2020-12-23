import React from "react";
import classNames from "classnames";
import styles from "./styles.scss";
import PropTypes from "prop-types";

export const ProgressBar = ({ percent, color, animation, children }) => {
    return (
        <div
            className={classNames(styles.base, {
                [styles.colorSuccess]: color === "success",
                [styles.colorError]: color === "error",
                [styles.animation]: animation
            })}
        >
            <div className={styles.bar}>
                <div className={styles.info}>
                    <div className={styles.label}>{children}</div>
                    <div className={styles.percent}>{percent}%</div>
                </div>
                <div className={styles.trail}>
                    <div style={{ width: percent + "%" }} className={styles.indicator}>
                        <div className={styles.stripes} />
                    </div>
                </div>
            </div>
        </div>
    );
};

ProgressBar.defaultProps = {
    animation: true
};

ProgressBar.propTypes = {
    /**
     * Percent completed
     */
    percent: PropTypes.number,
    /**
     * Color of progress bar
     */
    color: PropTypes.oneOf(["success", "error"]),
    /**
     * Label / message
     */
    children: PropTypes.any,
    /**
     * Enable/disable bar stripe animation
     */
    animation: PropTypes.bool
};
