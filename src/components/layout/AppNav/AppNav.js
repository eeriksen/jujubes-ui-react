import React, { useContext } from "react";
import classNames from "classnames";
import styles from "./AppNav.scss";

import { ScrollableArea } from "../ScrollableArea";
import { AppContext } from "../AppContext";
import { Overlay } from "../Overlay";

export const AppNav = ({ logo, title, children }) => {
    const { navActive, setNavActive } = useContext(AppContext);

    // Classes
    const baseClasses = classNames(styles.base, {
        [styles.isActive]: navActive
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
                    <div className={styles.topFade} />
                    <div className={styles.bottomFade} />
                </div>
            </div>

            {/* Overlay */}
            <div className={styles.overlay}>
                <Overlay visible={navActive} onClick={() => setNavActive(false)} />
            </div>
        </div>
    );
};
