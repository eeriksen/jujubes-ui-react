import React from "react";
import classNames from "classnames";
import styles from "./LogoSymbol.scss";

export const LogoSymbol = ({ width, height, padding, color }) => {
    return (
        <svg
            className={classNames(styles.logo, {
                [styles.colorPrimary]: color === "primary"
            })}
            height={height}
            width={width}
            style={{ padding: padding }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 110 103"
        >
            <g fillRule="evenodd">
                <circle cx="85" cy="25" r="25" />
                <circle cx="25" cy="25" r="25" />
                <circle cx="55" cy="78" r="25" />
            </g>
        </svg>
    );
};
