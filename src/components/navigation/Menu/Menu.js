import React from "react";
import PropTypes from "prop-types";
import styles from "./Menu.scss";

export const Menu = ({ children, hidden }) => {
    return !hidden ? <nav className={styles.base}>{children}</nav> : null;
};

Menu.propTypes = {
    /**
     * Hide menu
     */
    hidden: PropTypes.bool
};
