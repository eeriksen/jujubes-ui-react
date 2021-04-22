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
    cell: PropTypes.func,
    /**
     * Sortable indicator (Can be value of custom path.)
     */
    sortable: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /**
     * Indicate that table is sorted by column
     */
    sorted: PropTypes.oneOf(["asc", "desc"])
};
