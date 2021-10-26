import React from "react";
import PropTypes from "prop-types";
import styles from "./PageCrumbs.scss";
import { ScrollableArea } from "../../layout/ScrollableArea";
import { Crumb } from "./Crumb";

export const PageCrumbs = ({ children }) => {
    return (
        <div className={styles.base}>
            <div className={styles.leftFade} />
            <div className={styles.rightFade} />
            <ScrollableArea suppressScrollY>
                <div className={styles.container}>
                    {Object.assign([], children).reverse()}
                </div>
            </ScrollableArea>
        </div>
    );
};

PageCrumbs.propTypes = {
    children: PropTypes.arrayOf(Crumb)
};
