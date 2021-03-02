import React from "react";
import styles from "./Page.scss";
import { PageCrumbs } from "../PageCrumbs";
import { Spinner } from "../../loader/Spinner";

export const Page = ({ children, loading }) => {
    let mainBox = [];
    let topBox = [];

    React.Children.map(children, (child) => {
        if (child) {
            if (child.type === PageCrumbs) {
                topBox.push(child);
            } else {
                mainBox.push(child);
            }
        }
    });

    return loading ? (
        <div className={styles.base}>
            {topBox ? <div className={styles.topBox}>{topBox}</div> : null}
            <div className={styles.mainBox}>
                <div className={styles.loader}>
                    <div className={styles.box}>
                        <Spinner size="large" />
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className={styles.base}>
            {topBox ? <div className={styles.topBox}>{topBox}</div> : null}
            <div className={styles.mainBox}>{mainBox}</div>
        </div>
    );
};
