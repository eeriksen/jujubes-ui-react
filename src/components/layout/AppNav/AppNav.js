import React, { useContext } from "react";
import classNames from "classnames";
import styles from "./styles.scss";

import { Clickable } from "../../button/Clickable";
import { ScrollableArea } from "../ScrollableArea";
import { LayoutContext } from "../AppLayout";

export const AppNav = ({ logo, title, children }) => {
    const layout = useContext(LayoutContext);

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
                <ScrollableArea>
                    {/* Header */}
                    {title ? (
                        <div className={styles.header}>
                            <div className={styles.title}>{title}</div>
                        </div>
                    ) : null}

                    {/* Menu */}
                    <div className={styles.menu}>{children}</div>
                </ScrollableArea>

                {/* Fade*/}
                <div className={styles.fade} />
            </div>

            {/* Overlay */}
            <Clickable onClick={() => layout.setNavActive(false)} className={styles.overlay} />
        </div>
    );
};
