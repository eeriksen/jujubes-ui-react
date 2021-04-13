import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Paragraph.scss";

export const Paragraph = ({ spacing, align, children }) => {
    return (
        <p
            className={classNames(styles.base, {
                [styles.alignCenter]: align === "center",
                [styles.spacingNone]: spacing === "none",
                [styles.spacingLarge]: spacing === "large",
            })}
        >
            {children}
        </p>
    );
};

Paragraph.propTypes = {
    /**
     * Align content inside paragraph
     */
    align: PropTypes.oneOf(["center"]),
    /**
     * Remove spacing from bottom
     */
    spacing: PropTypes.oneOf(["none"])
};
