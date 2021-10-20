import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Toolbar.scss";

export const Item = ({ children, grow, shrink, spacing, truncate }) => {
    return (
        <div
            className={classNames(styles.item, {
                [styles.grow]: grow,
                [styles.shrink]: shrink,
                [styles.spacingNone]: spacing === "none",
                [styles.spacingMedium]: spacing === "medium",
                [styles.truncate]: truncate
            })}
        >
            {children}
        </div>
    );
};

Item.defaultProps = {
    shrink: true
};

Item.propTypes = {
    /**
     * Expand to fill empty space.
     */
    grow: PropTypes.bool,
    /**
     * Retract if space is too small.
     */
    shrink: PropTypes.bool,
    /**
     * Spacing between items.
     */
    spacing: PropTypes.oneOf(["none", "medium"]),
    /**
     * Truncate text and hide overflow.
     */
    truncate: PropTypes.bool
};
