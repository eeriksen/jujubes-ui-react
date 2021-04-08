import React from "react";
import PropTypes from "prop-types";
import styles from "./SettingsList.scss";

export const SettingsList = ({ children }) => {
    return <div className={styles.base}>{children}</div>;
};

SettingsList.propTypes = {
    /**
     * One or more SettingsList Items.
     */
    children: PropTypes.any
}
