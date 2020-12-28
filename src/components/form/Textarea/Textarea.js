import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Textarea.scss";

export const Textarea = (props) => {
    const { value, onChange, maxLength, placeholder, error, className, disabled, rows } = props;

    const handleChange = (e) => {
        // Check if exceeding max length
        if (maxLength && e.target.value.length > maxLength) {
            e.target.value = e.target.value.slice(0, maxLength);
        }

        // Callback
        onChange && onChange(e.target.value);
    };

    return (
        <textarea
            className={classNames(
                styles.base,
                {
                    [styles.error]: error
                },
                className
            )}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={maxLength}
            rows={rows}
            value={value || ""}
            onChange={handleChange}
        ></textarea>
    );
};

Textarea.defaultProps = {
    maxLength: 2000,
    rows: 3
};

Textarea.propTypes = {
    /**
     * Field value
     */
    value: PropTypes.string,

    /**
     * Change handler
     */
    onChange: PropTypes.func,

    /**
     * Number of visible rows
     */
    rows: PropTypes.number,

    /**
     * Max number of characters
     */
    maxLength: PropTypes.number,

    /**
     * Placeholder text
     */
    placeholder: PropTypes.string,

    /**
     * Visually show field error
     */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

    /**
     * Disabled field
     */
    disabled: PropTypes.bool,

    /**
     * Custom class name
     */
    className: PropTypes.string
};
