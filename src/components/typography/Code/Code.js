import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Code.scss";

export const Code = ({ inverted, block, children }) => {
    return (
        <code
            className={classNames(styles.base, {
                [styles.block]: block,
                [styles.inverted]: inverted
            })}
        >
            {children}
        </code>
    );
};

Code.propTypes = {
    /**
     * Invert colors
     */
    inverted: PropTypes.bool,
    /**
     * Convert to block element (fills width)
     */
    block: PropTypes.bool
};
