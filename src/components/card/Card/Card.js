import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./Card.scss"


export const Card = ({ className, children, type }) => {
    return (
        <div className={classNames(styles.base, {
            [styles.typeHighlight]: type === "highlight"
        }, className)}>
            {children}
        </div>
    )
}

Card.propTypes = {

    /**
     * Custom class name
     */
    className: PropTypes.string
}
