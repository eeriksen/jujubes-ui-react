import React from "react";
import PropTypes from "prop-types";
import styles from "./NavPanes.scss";

export const Pane = ({ children }) => {
    return <div className={styles.pane}>{children}</div>;
};

Pane.propTypes = {
    /**
     * The key of this pane.
     */
    paneKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * The label of this pane.
     */
    label: PropTypes.string,
    /**
     * The icon shown for this pane
     */
    icon: PropTypes.string
};
