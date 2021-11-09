import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Button.scss";
import { Icon } from "../../graphic/Icon";

import { LoaderHorizontal } from "../../loader/LoaderHorizontal";
import { Spinner } from "../../loader/Spinner";

export const Button = ({
    color,
    size,
    active,
    circle,
    square,
    fill,
    icon,
    iconRight,
    iconColor,
    labelColor,
    labelSize,
    hideIcon,
    hideLabel,
    type,
    disabled,
    children,
    title,
    busy,
    propagate,
    link,
    href,
    onClick,
    symbol,
    pill,
    className
}) => {
    const history = useHistory();

    /**
     * Handle on click
     * @param event
     */
    const handleClick = (event) => {
        // Event propagation
        if (!propagate) {
            event.stopPropagation();
        }

        // Link
        if (link && history) {
            history.push(link);
        }

        // Href
        else if (href) {
            const win = window.open(href, "_blank");
            win.focus();
        }

        // Handler
        else if (onClick) {
            onClick(event);
        }
    };

    // Classnames
    const buttonClasses = classNames(
        styles.base,
        {
            [styles.colorDefault]: !color,
            [styles.colorPrimary]: color === "primary",
            [styles.colorSuccess]: color === "success",
            [styles.colorWarning]: color === "warning",
            [styles.colorError]: color === "error",
            [styles.colorInfo]: color === "info",
            [styles.colorSilent]: color === "silent",

            [styles.sizeSmall]: size === "small",
            [styles.sizeBig]: size === "big",

            [styles.active]: active,
            [styles.circle]: circle,
            [styles.pill]: pill,
            [styles.square]: square,
            [styles.fill]: fill,

            [styles.iconRight]: iconRight,
            [styles.hideIcon]: hideIcon || busy,
            [styles.hideLabel]: hideLabel || busy,

            [styles.iconPrimary]: iconColor === "primary",
            [styles.iconInfo]: iconColor === "info",
            [styles.iconSuccess]: iconColor === "success",
            [styles.iconWarning]: iconColor === "warning",
            [styles.iconError]: iconColor === "error",
            [styles.iconContrast]: iconColor === "contrast",

            [styles.labelColorPrimary]: labelColor === "primary",
            [styles.labelColorSuccess]: labelColor === "success",
            [styles.labelColorWarning]: labelColor === "warning",
            [styles.labelColorError]: labelColor === "error",

            [styles.labelSizeBig]: labelSize === "big",
            [styles.withSymbol]: symbol !== null,
            [styles.isBusy]: busy
        },
        className
    );

    // Properties
    const properties = {
        className: buttonClasses,
        type: type || "button",
        onClick: handleClick,
        disabled: disabled || busy,
        title: title
    };

    return (
        <button {...properties}>
            {symbol ? <div className={styles.symbol}>{symbol}</div> : null}
            <div className={styles.content}>
                {/* Busy */}
                {busy ? (
                    <div className={styles.loader}>
                        {square || circle ? <Spinner /> : <LoaderHorizontal />}
                    </div>
                ) : null}

                {/* Icon left */}
                {icon && !iconRight ? <Icon className={styles.icon} name={icon} /> : null}

                {/* Children */}
                {children}

                {/* Icon right */}
                {icon && iconRight ? <Icon className={styles.icon} name={icon} /> : null}
            </div>

            {/* Shade */}
            {!busy ? <div className={styles.shade}></div> : null}
        </button>
    );
};

Button.defaultProps = {
    symbol: null
}

Button.propTypes = {
    /**
     * Click handler
     */
    onClick: PropTypes.func,

    /**
     * Link if using React Router
     */
    link: PropTypes.string,

    /**
     * Hard HTML link
     */
    href: PropTypes.string,

    /**
     * Color of button
     */
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "silent"
    ]),

    /**
     * Size of button
     */
    size: PropTypes.oneOf(["small", "big"]),

    /**
     * Renders a pressed state of the button
     */
    active: PropTypes.bool,

    /**
     * Disabled button
     */
    disabled: PropTypes.bool,

    /**
     * Shows a loading indicator on the button
     */
    busy: PropTypes.bool,

    /**
     * Display button as a circle. Use with icon.
     */
    circle: PropTypes.bool,

    /**
     * Display button as a square. Use with icon.
     */
    square: PropTypes.bool,

    /**
     * Add icon to button.
     */
    icon: PropTypes.string,

    /**
     * Color of the icon on the button
     */
    iconColor: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "contrast"
    ]),

    /**
     * Display the icon to the right of the label.
     */
    iconRight: PropTypes.bool,

    /**
     * Change the color of the text label.
     */
    labelColor: PropTypes.oneOf(["primary", "success", "warning", "error"]),

    /**
     * Size of label text
     */
    labelSize: PropTypes.oneOf(["big"]),

    /**
     * Symbol to display before label
     */
    symbol: PropTypes.any
};
