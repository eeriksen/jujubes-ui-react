import React from "react"
import styles from "./styles.scss"

import { AppNav } from "../AppNav"
import { AppBar } from "../AppBar"
import { AppContent } from "../AppContent"

export const AppLayout = ({children}) => {

    // Iterate children
    let nav = null;
    let bar = null;
    let content = null;

    React.Children.forEach(children, (child) => {
        switch(child.type){
            case AppNav: nav = child; break;
            case AppBar: bar = child; break;
            case AppContent: content = child; break;
            default: break;
        }
    });

    return (
        <div className={styles.base}>

            {/* Navigation */}
            {nav ? (
                <div className={styles.left}>
                    {nav}
                </div>
            ) : null}

            <div className={styles.right}>

                {/* Bar */}
                {bar ? (
                    <div className={styles.bar}>
                        {bar}
                    </div>
                ) : null}

                {/* Content */}
                {content ? (
                    <div className={styles.content}>
                        {content}
                    </div>
                ) : null}

            </div>
        </div>
    )
};
