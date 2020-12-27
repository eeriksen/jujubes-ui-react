import React, { useEffect } from "react";

export const WindowResizeListener = ({ onResize }) => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("resize", handleResize, false);
        }
        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("resize", handleResize, false);
            }
        };
    }, []);

    const handleResize = (event) => {
        onResize && onResize(event);
    };

    return (
        <div
            style={{
                display: "none",
                visibility: "hidden"
            }}
        />
    );
};
