import React from "react";
import styles from "./MarkupDisplay.scss";

export const MarkupDisplay = ({ children, html }) => {
    const createMarkup = () => {
        return html
            ? {
                  __html: html
              }
            : null;
    };

    return (
        <div className={styles.base}>
            <div className={styles.wrapper} dangerouslySetInnerHTML={createMarkup()}>
                {children}
            </div>
        </div>
    );
};
