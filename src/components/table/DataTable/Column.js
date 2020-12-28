import React from "react";
import PropTypes from "prop-types";

export const Column = () => {
    return <div></div>;
};

Column.propTypes = {
    /**
     * Column label
     */
    label: PropTypes.string,
    /**
     * Cell render function
     */
    cell: PropTypes.func
};
