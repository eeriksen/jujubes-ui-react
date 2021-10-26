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

    return (
        <div className={styles.base}>
            <div className={styles.topBox}>
                <div className={styles.wrapper}>{topBox}</div>
            </div>
            <div className={styles.mainBox}>
                {loading ? (
                    <div className={styles.loader}>
                        <div className={styles.box}>
                            <Spinner size="large" />
                        </div>
                    </div>
                ) : (
                    mainBox
                )}
            </div>
        </div>
    );
};
