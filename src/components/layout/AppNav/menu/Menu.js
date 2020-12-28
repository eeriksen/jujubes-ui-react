import React from "react";
import styles from "./Menu.scss";

export const Menu = ({ children }) => {
    return <nav className={styles.base}>{children}</nav>;
};
