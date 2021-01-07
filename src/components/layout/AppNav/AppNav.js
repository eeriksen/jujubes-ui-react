import React, { useContext } from "react";
import classNames from "classnames";
import styles from "./AppNav.scss";

import { Clickable } from "../../button/Clickable";
import { ScrollableArea } from "../ScrollableArea";
import { AppContext } from "../AppContext";

export const AppNav = ({ logo, title, children }) => {
    const layout = useContext(AppContext);

    // Classes
    const baseClasses = classNames(styles.base, {
        [styles.isActive]: layout.navActive
    });

    return (
        <div className={baseClasses}>
            <div className={styles.content}>
                {/* Logo */}
                <div className={styles.logo}>
                    <div className={styles.wrapper}>{logo}</div>
                </div>

                {/* Menu content */}
                <div className={styles.container}>
                    <ScrollableArea>
                        <div className={styles.wrapper}>
                            {/* Header */}
                            {title ? (
                                <div className={styles.header}>
                                    <div className={styles.title}>{title}</div>
                                </div>
                            ) : null}

                            {/* Menu */}
                            <div className={styles.menu}>{children}</div>
                        </div>
                    </ScrollableArea>

                    {/* Fade*/}
                    <div className={styles.fade} />
                </div>
            </div>

            {/* Overlay */}
            <Clickable onClick={() => layout.setNavActive(false)} className={styles.overlay} />
        </div>
    );
};
