import React from "react";
import PropTypes from "prop-types";
import styles from "./FormItem.scss";
import classNames from "classnames";

export const FormItem = (props) => {
    const { children, label, error, className, info } = props;

    return (
        <div
            className={classNames(
                styles.base,
                {
                    [styles.error]: error
                },
                className
            )}
        >
            <div className={styles.label}>
                {label ? (
                    <label>
                        {label}
                        <span className={styles.colon}>:</span>
                    </label>
                ) : (
                    <span />
                )}
            </div>
            <div className={styles.field}>
                {React.Children.map(children, (child) => {
                    if (!child) {
                        return null;
                    }

                    return React.cloneElement(child, {
                        error: child.props.error || error
                    });
                })}

                {/* Info text */}
                {info || (error && typeof error === "string") ? (
                    <div className={styles.infoText}>
                        {info} {error}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

FormItem.propTypes = {
    /**
     * Form item label
     */
    label: PropTypes.string,

    /**
     * Visual error on field
     */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

    /**
     * Supply extra info to the form item
     */
    info: PropTypes.string
};
