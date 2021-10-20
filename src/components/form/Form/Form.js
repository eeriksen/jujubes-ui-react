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
        <form className={classNames(styles.base)} onSubmit={handleSubmit}>
            {children}
        </form>
    );
};

Form.propTypes = {
    /**
     * Submit form handler
     */
    onSubmit: PropTypes.func
};
