import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Crumb.scss";

import { Clickable } from "../../button/Clickable";

export const Crumb = ({ link, label, current }) => {
    return (
        <div
            className={classNames(styles.crumb, {
                [styles.current]: current
            })}
        >
            <Clickable block className={styles.label} link={link}>
                {label}
            </Clickable>
        </div>
    );
};

Crumb.defaultValues = {
    current: false
};

Crumb.propTypes = {
    /**
     * Navigate to link when clicked
     */
    link: PropTypes.string,
    /**
     * Label of this crumb
     */
    label: PropTypes.string,
    /**
     * Flag to indicate if this is the current crumb
     */
    current: PropTypes.bool
};
