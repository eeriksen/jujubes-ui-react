import { useEffect, useContext } from "react";
import { BREAKPOINTS } from "../AppContainer/constants";
import { AppContext } from "../AppContext";

export const WindowResizeListener = ({ onInit, onResize }) => {
    const { updatePageInfo } = useContext(AppContext);

    useEffect(() => {
        redrawInfo();
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
        redrawInfo();
        onResize && onResize(event);
    };

    const redrawInfo = () => {
        updatePageInfo({
            windowWidth: window.innerWidth,
            breakpoint: calculateBreakpoint()
        })
    };

    const calculateBreakpoint = () => {
        const windowWidth = window.innerWidth;
        let breakpointKeys = Object.keys(BREAKPOINTS);
        const breakpoint = breakpointKeys.reduce((agg, key) => {
            const keyNumber = parseInt(key, 10);
            if (windowWidth <= keyNumber && (agg === null || keyNumber < agg)) {
                return keyNumber;
            } else {
                return agg;
            }
        }, breakpointKeys[breakpointKeys.length - 1]);
        return BREAKPOINTS[breakpoint];
    };

    return null;
};
