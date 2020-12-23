import React, { useEffect, useRef } from "react";

import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

export const ScrollableArea = ({ children }) => {
    const areaRef = useRef(null);
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

    const handleResize = () => {
        areaRef.current.updateScroll();
    };

    return <PerfectScrollbar ref={areaRef}>{children}</PerfectScrollbar>;
};
