import React from "react";
import styles from "./SettingsList.scss";

export const SettingsList = ({ children }) => {
    return <div className={styles.base}>{children}</div>;
};
