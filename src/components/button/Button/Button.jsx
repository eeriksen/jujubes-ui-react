import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./styles.scss"
import { Icon } from "../../graphic/Icon"

import { LoaderHorizontal } from "../../loader/LoaderHorizontal"


export class Button extends React.Component {

    /**
     * Handle on click
     * @param event
     */
    _onClick = (event) => {

        // Properties
        const { propagate, link, history, href, onClick } = this.props;

        // Event propagation
        if(!propagate){
            event.stopPropagation();
        }

        // Link
        if(link){
            history.push(link);
        }

        // Href
        else if(href){
            const win = window.open(href, '_blank');
            win.focus();
        }

        // Handler
        else if(onClick){
            onClick(event);
        }

    };


    /**
     * RENDER:
     * @returns {XML}
     */
    render(){

        // Properties
        const { color, size, active, circle, square, icon, iconRight, iconColor, labelColor,
            hideIcon, hideLabel, className, type, disabled, children, onMouseOver, onMouseOut, title, busy
        } = this.props;

        // Classnames
        const buttonClasses = classNames(styles.base, {

            [styles.colorPrimary]: color === "primary",
            [styles.colorSecondary]: color === "secondary",
            [styles.colorSuccess]: color === "success",
            [styles.colorWarning]: color === "warning",
            [styles.colorError]: color === "error",
            [styles.colorInfo]: color === "info",

            [styles.sizeSmall]: size === "small",
            [styles.sizeBig]: size === "big",

            [styles.silent]: color === "silent",

            [styles.active]: active,
            [styles.circle]: circle,
            [styles.square]: square,

            [styles.iconRight]: iconRight,
            [styles.hideIcon]: hideIcon || busy,
            [styles.hideLabel]: hideLabel || busy,

            [styles.iconPrimary]: iconColor === "primary",
            [styles.iconInfo]: iconColor === "info",
            [styles.iconSuccess]: iconColor === "success",
            [styles.iconError]: iconColor === "error",

            [styles.labelError]: labelColor === "error"

        }, className);


        // Properties
        const props = {
            className: buttonClasses,
            type: type || 'button',
            onClick: this._onClick,
            disabled: disabled || busy,
            onMouseOver, onMouseOut,
            title: title
        };

        return (
            <button {...props}>

                {/* Busy */}
                {busy ? (
                    <div className={styles.loader}>
                        <LoaderHorizontal />
                    </div>
                ) : null}

                {/* Icon left */}
                {icon && !iconRight ? (<Icon className={styles.icon} name={icon} />) : null}

                {/* Children */}
                {children}

                {/* Icon right */}
                {icon && iconRight ? (<Icon className={styles.icon} name={icon} />) : null}
            </button>
        )
    }
}

Button.propTypes = {
    onClick: PropTypes.func,
    color: PropTypes.oneOf(['primary', 'success', 'error', 'silent']),
    size: PropTypes.oneOf(['small', 'big']),
    active: PropTypes.bool,
    busy: PropTypes.bool,
    circle: PropTypes.bool,
    square: PropTypes.bool,
    icon: PropTypes.string
}
