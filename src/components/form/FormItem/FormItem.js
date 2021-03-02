import React from "react";
import PropTypes from "prop-types";
import styles from "./FormItem.scss";
import classNames from "classnames";
import { Row } from "../../grid/Row";
import { Col } from "../../grid/Col";

export const FormItem = ({ children, label, error, className, info, responsive }) => {
    // Classes
    const baseClasses = classNames(
        styles.base,
        {
            [styles.responsive]: responsive,
            [styles.error]: error
        },
        className
    );

    return (
        <div className={baseClasses}>
            <Row gutter={["regular", "none"]}>
                {/* Label */}
                <Col lg={responsive ? 6 : 24} className={styles.label}>
                    {label ? (
                        <label>
                            {label}
                            <span className={styles.colon}>:</span>
                        </label>
                    ) : (
                        <span />
                    )}
                </Col>

                {/* Field */}
                <Col lg={responsive ? 12 : 24} className={styles.field}>
                    {React.Children.map(children, (child) => {
                        // Check if null
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
                </Col>
            </Row>
        </div>
    );
};

FormItem.defaultValues = {
    responsive: false
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
