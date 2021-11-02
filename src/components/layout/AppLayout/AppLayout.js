import React from "react";
import styles from "./AppLayout.scss";

export const AppLayout = ({ children }) => {
    let nav = null;
    let bar = null;
    let content = [];

    React.Children.forEach(children, (child) => {
        if (child && child.props) {
            switch (child.props.slot) {
                case "nav":
                    nav = child;
                    break;
                case "bar":
                    bar = child;
                    break;
                default:
                    content.push(child);
                    break;
            }
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
