import React, { useState } from "react";
import styles from "./styles.scss";

import { AppNav } from "../AppNav";
import { AppBar } from "../AppBar";
import { AppContent } from "../AppContent";
import { AppContext } from "../AppContext";

export const AppLayout = ({ children }) => {
    const [navActive, setNavActive] = useState(false);
    const [subBarActive, setSubBarActive] = useState(false);

    // Iterate children
    let nav = null;
    let bar = null;
    let content = null;

    React.Children.forEach(children, (child) => {
        switch (child.type) {
            case AppNav:
                nav = child;
                break;
            case AppBar:
                bar = child;
                break;
            case AppContent:
                content = child;
                break;
            default:
                break;
        }
    });

    return (
        <AppContext.Provider
            value={{
                navActive,
                setNavActive,
                subBarActive,
                setSubBarActive
            }}
        >
            <div className={styles.base}>
                {/* Navigation */}
                {nav ? <div className={styles.left}>{nav}</div> : null}

                <div className={styles.right}>
                    {/* Bar */}
                    {bar ? <div className={styles.bar}>{bar}</div> : null}

                    {/* Content */}
                    {content ? <div className={styles.content}>{content}</div> : null}
                </div>
            </div>
        </AppContext.Provider>
    );
};
