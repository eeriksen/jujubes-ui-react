import React from "react";
import classNames from "classnames";
import styles from "./Toolbar.scss";
import { Icon } from "../../../graphic/Icon";

export const ToolbarItem = ({ icon, label, active, title, onClick, disabled }) => {
    return (
        <button
            title={title}
            className={classNames(styles.item, {
                [styles.active]: active,
                [styles.disabled]: disabled
            })}
            onClick={onClick}
            disabled={disabled}
        >
            {icon ? <Icon className={styles.icon} name={icon} /> : <div className={styles.label}>{label}</div>}
        </button>
    );
};
