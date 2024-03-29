import React from "react";
import classNames from "classnames";
import styles from "./Arrow.scss";

export const Arrow = ({ className, color, style }) => {
    return (
        <div
            className={classNames(
                styles.base,
                {
                    [styles.colorContrast]: color === "contrast",
                    [styles.colorPrimary]: color === "primary",
                    [styles.colorAccent]: color === "accent"
                },
                className
            )}
            style={style}
        >
            <svg viewBox="0 0 253 123" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M126.5.5c9.5 0 28.5 27.22 72 74.11 29 31.26 47.167 47.13 54.5 47.613H0c10.333-3.002 29.167-18.873 56.5-47.613C97.5 31.5 117 .5 126.5.5z"
                    fillRule="evenodd"
                />
            </svg>
        </div>
    );
};
