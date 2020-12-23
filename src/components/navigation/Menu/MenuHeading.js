import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

export const MenuHeading = ({ label }) => {
    return <span className={styles.heading}>{label}</span>;
};

MenuHeading.propTypes = {
    /**
     * Heading text
     */
    label: PropTypes.string
}
