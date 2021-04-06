import React from "react";
import styles from "./SettingsList.scss";

import { Icon } from "../../graphic/Icon";

export const Item = ({ title, children }) => {
    return (
        <div className={styles.item}>
            {title ? (
                <div className={styles.title}>
                    <Icon className={styles.icon} name="chevron-right" />
                    {title}
                </div>
            ) : null}

            {children ? <div className={styles.content}>{children}</div> : null}
        </div>
    );
};
