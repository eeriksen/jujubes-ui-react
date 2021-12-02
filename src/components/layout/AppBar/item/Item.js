import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Item.scss";
import { Clickable } from "../../../button/Clickable/index";

export const Item = ({ onClick, placeRight, placeLeft, children, grow, shrink }) => {
    return React.createElement(
        onClick ? Clickable : "div",
        {
            className: classNames(styles.item, {
                [styles.placeRight]: placeRight,
                [styles.placeLeft]: placeLeft,
                [styles.grow]: grow,
                [styles.shrink]: shrink
            }),
            onClick: onClick
        },
        <div className={styles.wrapper}>{children}</div>
    );
};

Item.propTypes = {
    placeLeft: PropTypes.bool,
    placeRight: PropTypes.bool
};
