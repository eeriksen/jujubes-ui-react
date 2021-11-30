import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Select.scss";

import { Icon } from "../../graphic/Icon";

export const Select = (props) => {
    const {
        value,
        onChange,
        size,
        error,
        className,
        selectClassName,
        children,
        placeholder,
        disabled
    } = props;

    const handleChange = (e) => {
        onChange && onChange(e.target.value);
    };

    // Select classes
    const baseClasses = classNames(
        styles.base,
        {
            [styles.placeholder]: !value,
            [styles.error]: error,
            [styles.disabled]: disabled,
            [styles.sizeSmall]: size === "small",
            [styles.sizeBig]: size === "big"
        },
        className
    );

    // Select classes
    const selectClasses = classNames(styles.select, selectClassName);
    return (
        <div className={baseClasses}>
            <div className={styles.arrow}>
                <Icon className={styles.icon} name="caret-down" />
            </div>
            <select
                value={value || ""}
                onChange={handleChange}
                className={selectClasses}
                disabled={disabled}
            >
                {!value && placeholder ? <option>{placeholder}</option> : null}
                {children}
            </select>
        </div>
    );
};

Select.defaultProps = {
    value: ""
};

Select.propTypes = {
    /**
     * The value of the select.
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Triggered when another value is selected.
     */
    onChange: PropTypes.func,

    /**
     * The placeholder of the select field.
     */
    placeholder: PropTypes.string,

    /**
     * Change the size of the select.
     */
    size: PropTypes.oneOf(["small", "big"]),

    /**
     * Disabled state.
     */
    disabled: PropTypes.bool,

    /**
     * Visualize error state.
     */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

    /**
     * Custom class name.
     */
    className: PropTypes.string,

    /**
     * Custom class name of the select element.
     */
    selectClassName: PropTypes.string
};
