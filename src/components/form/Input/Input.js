import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Input.scss";
import { Icon } from "../../graphic/Icon";
import { Clickable } from "../../button/Clickable";

export const Input = (props) => {
    const {
        onPrependClick,
        onAppendClick,
        size,
        icon,
        error,
        prepend,
        append,
        className,
        disabled,
        onFocus,
        onBlur,
        type
    } = props;
    const [hasFocus, setHasFocus] = useState(false);

    return (
        <div className={classNames(
            styles.base,
            {
                [styles.sizeSmall]: size === "small",
                [styles.sizeBig]: size === "big",
                [styles.error]: error,
                [styles.inputIcon]: icon,
                [styles.inputPrepend]: prepend,
                [styles.inputAppend]: append,
                [styles.typeColor]: type === "color"
            },
            className
        )}>
            <IconPart icon={icon} hasFocus={hasFocus} />
            <PrependPart prepend={prepend} onPrependClick={onPrependClick} disabled={disabled} />
            <InputPart
                {...props}
                onFocus={(e) => setHasFocus(true) | onFocus && onFocus(e)}
                onBlur={(e) => setHasFocus(false) | onBlur && onBlur(e)}
            />
            <AppendPart append={append} onAppendClick={onAppendClick} />
        </div>
    );
};

/**
 * PART:
 * Icon
 */
const IconPart = ({ icon, hasFocus }) => {
    return icon ? (
        <Icon
            name={icon}
            className={classNames(styles.icon, {
                [styles.hasFocus]: hasFocus
            })}
        />
    ) : null;
};

/**
 * PART:
 * Prepend
 */
const PrependPart = ({ prepend, onPrependClick, disabled }) => {
    return prepend ? (
        <Clickable
            className={classNames(styles.prepend, {
                [styles.clickable]: !disabled && onPrependClick,
                [styles.disabled]: disabled
            })}
            onClick={(e) => (!disabled && onPrependClick ? onPrependClick(e) : null)}
        >
            <div className={styles.content}>{prepend}</div>
        </Clickable>
    ) : null;
};

/**
 * PART:
 * Input
 */
const InputPart = (props) => {
    const {
        placeholder,
        inputClassName,
        disabled,
        maxLength,
        max,
        min,
        step,
        value,
        type,
        onClick,
        onFocus,
        onBlur,
        onChange,
        onEnter
    } = props;

    /**
     * When input changes
     * @param e
     * @private
     */
    const handleChange = (e) => {
        // Check id exceeding max length
        if (maxLength && e.target.value.length > maxLength) {
            e.target.value = e.target.value.slice(0, maxLength);
        }

        // Callback
        onChange && onChange(e.target.value);
    };

    /**
     * Handle key press
     * @private
     */
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            onEnter && onEnter(e);
        }
    };

    return (
        <input
            type={type}
            className={classNames(styles.input, inputClassName)}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={maxLength}
            max={max}
            min={min}
            step={step}
            value={typeof value !== "undefined" && value !== null ? value : ""}
            onChange={handleChange}
            onClick={onClick}
            onKeyPress={handleKeyPress}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
};

/**
 * PART:
 * Append
 */
const AppendPart = ({ append, onAppendClick }) => {
    return append ? (
        <Clickable
            className={classNames(styles.append, {
                [styles.clickable]: onAppendClick
            })}
            onClick={() => onAppendClick && onAppendClick()}
        >
            <div className={styles.content}>{append}</div>
        </Clickable>
    ) : null;
};


Input.defaultProps = {
    type: "text",
    maxLength: 255
};

Input.propTypes = {
    /**
     * Size of input field
     */
    size: PropTypes.oneOf(["small", "big"]),

    /**
     * Input placeholder
     */
    placeholder: PropTypes.string,

    /**
     * On value change callback
     */
    onChange: PropTypes.func,

    /**
     * Input type (text, password, tel etc.)
     */
    type: PropTypes.string,

    /**
     * Maximum allowed characters
     */
    maxLength: PropTypes.number,

    /**
     * Max value if number type
     */
    max: PropTypes.number,

    /**
     * Min value if number type
     */
    min: PropTypes.number,

    /**
     * Step
     */
    step: PropTypes.number,

    /**
     * Render input error indication
     */
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

    /**
     * Show a prepended icon
     */
    icon: PropTypes.string,

    /**
     * Prepend icon or content
     */
    prepend: PropTypes.object,

    /**
     * Callback for when prepend is clicked
     */
    onPrependClick: PropTypes.func
};
