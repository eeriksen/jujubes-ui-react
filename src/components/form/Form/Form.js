import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./styles.scss"

export const Form = ({onSubmit, children, className, responsive}) => {

    /**
     * Handle form submit
     * @private
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit && onSubmit(event);
    };

    const baseClasses = classNames(styles.base, className);

    return (
        <form className={baseClasses} onSubmit={handleSubmit}>
            {React.Children.map(children, (child) => {
                return child ? React.cloneElement(child, {
                    responsive
                }) : null;
            })}
        </form>
    )

}

Form.defaultProps = {
    responsive: false
}

Form.propTypes = {

    /**
     * Submit form handler
     */
    onSubmit: PropTypes.func,

    /**
     * Display form items horizontally on large screens
     */
    responsive: PropTypes.bool
}
