import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./ButtonGroup.scss";

import { Button } from "../Button";

export const ButtonGroup = ({ fill, children, className }) => {
    // Button elements
    const buttons = React.Children.map(children, (child) => {
        if (child && child.type === Button) {
            return React.cloneElement(child, {
                fill: fill,
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
