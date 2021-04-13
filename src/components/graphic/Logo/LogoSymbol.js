import React from "react";

export const LogoSymbol = ({ fill, width, height, padding }) => {
    return (
        <svg
            height={height}
            width={width}
            style={{ padding: padding }}
            fill={fill || "#fff"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 116 143"
        >
            <g fill="none" fillRule="evenodd">
                <g stroke="#FFF" strokeWidth="10" transform="translate(5 37.633)">
                    <circle cx="26.5" cy="27.065" r="26.5" />
                    <circle cx="79.5" cy="27.065" r="26.5" />
                    <circle cx="53.5" cy="73.065" r="26.5" />
                </g>
                <path
                    fill="#FFF"
                    d="M87.156.241c-18.1.451-27.692 9.713-28.774 27.787C76.136 27.218 85.727 17.956 87.156.24z"
                />
                <path
                    fill="#FFF"
                    fillRule="nonzero"
                    d="M63.413 55.574a5 5 0 01-9.826-1.856c2.726-14.44-2.202-23.573-15.518-28.865a5 5 0 013.693-9.293c17.798 7.073 25.26 20.9 21.651 40.014z"
                />
            </g>
        </svg>
    );
};
