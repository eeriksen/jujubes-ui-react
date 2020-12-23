import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./styles.scss";

import { Button } from "../Button";

export const ButtonGroup = ({ children, className }) => {
    // Button elements
    const buttons = React.Children.map(children, (child) => {
        if (child && child.type === Button) {
            return React.cloneElement(child, {
                className: styles.item
            });
        }
    });

    return <div className={classNames(styles.base, className)}>{buttons}</div>;
};

ButtonGroup.propTypes = {
    /**
     * Add custom classname
     */
    className: PropTypes.string
};
