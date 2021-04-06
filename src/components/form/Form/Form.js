import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Form.scss";

export const Form = ({ onSubmit, children }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit && onSubmit(event);
    };

    return (
        <form
            className={classNames(styles.base)}
            onSubmit={handleSubmit}
        >
            {React.Children.map(children, (child) => {
                return child
                    ? React.cloneElement(child)
                    : null;
            })}
        </form>
    );
};

Form.propTypes = {
    /**
     * Submit form handler
     */
    onSubmit: PropTypes.func
};
