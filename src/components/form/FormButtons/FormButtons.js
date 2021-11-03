import React from "react";
import styles from "./FormButtons.scss";
import classNames from "classnames";

export const FormButtons = ({ children, align }) => {
    return (
        <div
            className={classNames(styles.base, {
                [styles.alignRight]: align === "right"
            })}
        >
            {React.Children.map(children, (child, index) => (
                <div key={index} className={styles.item}>
                    {React.cloneElement(child, {
                        className: styles.button
                    })}
                </div>
            ))}
        </div>
    );
};
