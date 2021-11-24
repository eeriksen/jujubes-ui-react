import React from "react";
import classNames from "classnames";
import styles from "./Toolbar.scss";

export const ToolbarItemGroup = ({ children }) => {
    return <div className={classNames(styles.group, "toolbar_item_group")}>{children}</div>;
};
