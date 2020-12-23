import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./styles.scss"


export const Card = ({ className, children }) => {
    return (
        <div className={classNames(styles.base, className)}>
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
