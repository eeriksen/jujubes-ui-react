import React from "react";
import styles from "./Page.scss";
import { PageCrumbs } from "../PageCrumbs";

export const Page = ({ children }) => {
    let mainBox = [];
    let topBox = [];
    React.Children.map(children, (child) => {
        if (child && child.type === PageCrumbs) {
            topBox.push(child);
        } else {
            mainBox.push(child);
        }
    });

    return (
        <div className={styles.base}>
            {topBox ? <div className={styles.topBox}>{topBox}</div> : null}
            <div className={styles.mainBox}>{mainBox}</div>
        </div>
    );
};
