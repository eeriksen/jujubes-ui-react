import React, { useEffect, useRef } from "react";

import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

export const ScrollableArea = ({ children, onScrollX, onScrollY, containerRef }) => {
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

    return (
        <PerfectScrollbar
            ref={areaRef}
            containerRef={(ref) => {

                // Fix for wrong dimensions
                if (ref) {
                    ref._getBoundingClientRect = ref.getBoundingClientRect;
                    ref.getBoundingClientRect = () => {
                        const original = ref._getBoundingClientRect();
                        return {
                            ...original,
                            width: Math.floor(original.width),
                            height: Math.floor(original.height)
                        };
                    };
                }

                if(containerRef){
                    containerRef.current = ref;
                }
            }}
            onScrollX={onScrollX}
            onScrollY={onScrollY}
        >
            {children}
        </PerfectScrollbar>
    );
};
