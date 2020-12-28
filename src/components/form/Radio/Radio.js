import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Radio.scss";

export const Radio = ({ groupValue, value, onToggle, children }) => {
    const handleToggle = (e) => {
        e.stopPropagation();
        onToggle && onToggle(value);
    };

    return (
        <div
            className={classNames(styles.base, {
                [styles.selected]: groupValue === value
            })}
            onClick={handleToggle}
        >
            <div className={styles.symbol}>
                <div className={styles.dot}></div>
            </div>

            {/* Label */}
            {children ? <div className={styles.label}>{children}</div> : null}
        </div>
    );
};

Radio.propTypes = {
    /**
     * Radio button value
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * Toggle function callback
     */
    onToggle: PropTypes.func,
    /**
     * The label of the radio button
     */
    children: PropTypes.any
};
