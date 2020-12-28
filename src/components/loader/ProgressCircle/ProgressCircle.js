import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./ProgressCircle.scss";
import { Circle } from "rc-progress";

export const ProgressCircle = ({
    percent,
    value,
    annotation,
    color,
    children,
    strokeWidth,
    trailWidth,
    strong
}) => {
    return (
        <div
            className={classNames(styles.base, {
                [styles.successType]: color === "success",
                [styles.warningType]: color === "warning",
                [styles.errorType]: color === "error",
                [styles.strong]: strong
            })}
        >
            <div className={styles.content}>
                <Circle
                    className={styles.circle}
                    percent={percent}
                    strokeWidth={strokeWidth}
                    trailWidth={trailWidth}
                    strokeLinecap="round"
                />

                <div className={styles.details}>
                    <div className={styles.wrapper}>
                        <div className={styles.value}>
                            {value || percent}
                            {annotation ? (
                                <span className={styles.annotation}>{annotation}</span>
                            ) : null}
                        </div>
                        {children ? <div className={styles.label}>{children}</div> : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

ProgressCircle.defaultProps = {
    annotation: "%",
    percent: 0,
    strokeWidth: 5,
    trailWidth: 5
};

ProgressCircle.propTypes = {
    /**
     * Percent value
     */
    percent: PropTypes.number,
    /**
     * Value shown in middle
     */
    value: PropTypes.any,
    /**
     * Annotation displayed beside the value
     */
    annotation: PropTypes.any,
    /**
     * Color of progress circle
     */
    color: PropTypes.oneOf(["success", "warning", "error"]),
    /**
     * Label of progress circle
     */
    children: PropTypes.any
};
