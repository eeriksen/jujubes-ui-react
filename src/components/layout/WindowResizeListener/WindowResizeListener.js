import { useEffect } from "react";

export const WindowResizeListener = ({ onInit, onResize }) => {
    useEffect(() => {
        onInit && onInit();
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

    return null;
};
