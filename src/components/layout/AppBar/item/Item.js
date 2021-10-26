import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Item.scss";
import { Clickable } from "../../../button/Clickable/index";

export const Item = (props) => {
    return React.createElement(props.onClick ? Clickable : "div", {
        className: classNames(styles.item, {
            [styles.placeRight]: props.placeRight,
            [styles.placeLeft]: props.placeLeft,
        }),
        onClick: props.onClick
    }, (
        <div className={styles.wrapper}>{props.children}</div>
    ))
};

Item.propTypes = {
    placeLeft: PropTypes.bool,
    placeRight: PropTypes.bool
};
