import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./Card.scss"
import { Clickable } from "../../button/Clickable";
import { Link } from "react-router-dom";


export const Card = ({ className, children, type, onClick, link }) => {
    return (
        <Clickable onClick={onClick} className={classNames(styles.base, {
            [styles.clickable]: onClick || link,
            [styles.typeHighlight]: type === "highlight"
        }, className)}>
            {children}
            {link ? (
                <Link className={styles.link} to={link} />
            ) : null}
        </Clickable>
    )
}

Card.propTypes = {

    /**
     * Apply visual mod
     */
    type: PropTypes.oneOf(["highlight"]),

    /**
     * Click handler
     */
    onClick: PropTypes.func,

    /**
     * Router link
     */
    link: PropTypes.string,

    /**
     * Custom class name
     */
    className: PropTypes.string
}
