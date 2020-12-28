import React from "react";
import PropTypes from "prop-types";
import styles from "./PopupFooter.scss";

export const PopupFooter = ({ children }) => {
    return <div className={styles.footer}>{children}</div>;
};

PopupFooter.propTypes = {
    /**
     * Content of footer
     */
    children: PropTypes.any
};
