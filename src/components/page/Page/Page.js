import React from "react";
import styles from "./Page.scss";
import { PageCrumbs } from "../PageCrumbs";
import { Spinner } from "../../loader/Spinner";
import { ContentWrapper } from "../../layout/ContentWrapper";

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
            {topBox.length ? (
                <ContentWrapper confine="page" className={styles.topBox}>
                    {topBox}
                </ContentWrapper>
            ) : null}
            <ContentWrapper confine="page" className={styles.mainBox}>
                {loading ? (
                    <div className={styles.loader}>
                        <div className={styles.box}>
                            <Spinner size="large" />
                        </div>
                    </div>
                ) : (
                    mainBox
                )}
            </ContentWrapper>
        </div>
    );
};
