import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"
import Icon from "../../graphic/Icon"

import LoaderHorizontal from "../../loader/LoaderHorizontal"


export default class extends React.Component {

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
        const { color, size, active, compact, block, circle, square, iconRight, icon, iconColor, labelColor,
            hideIcon, hideLabel, className, type, disabled, children, onMouseOver, onMouseOut, title, busy
        } = this.props;

        // Classnames
        const buttonClasses = classNames(styles.base, {
            [styles.default]: !color,
            [styles.primary]: color === "primary",
            [styles.success]: color === "success",
            [styles.error]: color === "error",
            [styles.silent]: color === "silent",

            [styles.small]: size === "small",
            [styles.big]: size === "big",

            [styles.active]: active,
            [styles.compact]: compact,
            [styles.block]: block,
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
