import React from "react";
import styles from "./Page.scss";
import { PageCrumbs } from "../PageCrumbs";
import { PageActions } from "../PageActions";
import { ContentWrapper } from "../../layout/ContentWrapper";
import { PageHeader } from "../PageHeader";
import { PageNav } from "../PageNav";

export const Page = ({ children }) => {
    let mainBox = [];
    let topBox = [];
    let actionsBox = [];

    React.Children.map(children, (child) => {
        if (child) {
            if (child.type === PageCrumbs) {
                topBox.unshift(child);
            } else if (child.type === PageHeader || child.type === PageNav) {
                topBox.push(child);
            } else if (child.type === PageActions) {
                actionsBox.push(child);
            } else {
                mainBox.push(child);
            }
        }
    });

    return (
        <div className={styles.base}>
            {topBox && topBox.length ? (
                <div className={styles.topBox}>
                    <ContentWrapper confine="page" className={styles.wrapper}>
                        {topBox}
                    </ContentWrapper>
                </div>
            ) : null}
            <ContentWrapper confine="page" className={styles.mainBox}>
                {actionsBox.length ? (
                    <div className={styles.wrapper}>
                        <div className={styles.leftCol}>{mainBox}</div>
                        <div className={styles.rightCol}>{actionsBox}</div>
                    </div>
                ) : (
                    mainBox
                )}
            </ContentWrapper>
        </div>
    );
};
