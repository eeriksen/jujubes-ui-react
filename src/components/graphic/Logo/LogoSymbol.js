import React from "react";

export const LogoSymbol = ({ width, height, padding }) => {
    return (
        <svg
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
