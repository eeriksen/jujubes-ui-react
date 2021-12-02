import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./FormItem.scss";
import { PopOver } from "../../navigation/PopOver";
import { Icon } from "../../graphic";
import { Clickable } from "../../button/Clickable";

export const FormItem = (props) => {
    const { children, label, error, className, info } = props;
    const [infoVisible, setInfoVisible] = useState(false);
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

                {info ? (
                    <div
                        className={classNames(styles.info, {
                            [styles.visible]: infoVisible
                        })}
                    >
                        <PopOver
                            padding="regular"
                            position="top"
                            visible={infoVisible}
                            onClose={() => setInfoVisible(false)}
                            content={info}
                        >
                            <Clickable onClick={() => setInfoVisible(!infoVisible)}>
                                <Icon className={styles.icon} name="info" />
                            </Clickable>
                        </PopOver>
                    </div>
                ) : null}
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

                {/* Error text */}
                {error && typeof error === "string" ? (
                    <div className={styles.errorText}>{error}</div>
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
