import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

export const Column = () => {
    return <div className={styles.column}></div>;
};

Column.propTypes = {
    field: PropTypes.string
};
