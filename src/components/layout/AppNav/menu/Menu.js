import React from "react";
import classNames from "classnames";
import styles from "./styles.scss";

export const Menu = ({ children, className }) => {
    return <nav className={classNames(styles.base, className)}>{children}</nav>;
};
