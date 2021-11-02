import React from "react";
import styles from "./AppLayout.scss";

export const AppLayout = ({ children }) => {
    let nav = null;
    let bar = null;
    let content = null;

    React.Children.forEach(children, (child) => {
        console.log(child);
        switch (child.type.name) {
            case "AppNav":
                nav = child;
                break;
            case "AppBar":
                bar = child;
                break;
            case "AppContent":
                content = child;
                break;
            default:
                break;
        }
    });

    return (
        <div className={styles.base}>
            {/* Navigation */}
            {nav ? <div className={styles.left}>{nav}</div> : null}

            <div className={styles.right}>
                {/* Bar */}
                {bar ? bar : null}

                {/* Content */}
                {content ? <div className={styles.content}>{content}</div> : null}
            </div>
        </div>
    );
};
