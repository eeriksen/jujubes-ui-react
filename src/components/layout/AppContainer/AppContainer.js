import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import { AppContext } from "../AppContext";
import themes from "../../../styles/themes";
import { hexToRgb } from "../../../utils/colorUtils";
import WebFont from "webfontloader";
import "./AppContainer.scss";
import { DATE_TIME_FORMAT, BREAKPOINTS } from "../../../constants";

moment.defaultFormat = DATE_TIME_FORMAT;
moment.defaultFormatUtc = DATE_TIME_FORMAT;

export const AppContainer = ({ children, initialTheme }) => {
    const [navActive, setNavActive] = useState(false);
    const [subBarActive, setSubBarActive] = useState(false);
    const [theme, setTheme] = useState(initialTheme || themes["standard"]);
    const [pageInfo, setPageInfo] = useState({
        windowWidth: window.innerWidth,
        breakpoint: null,
        hasNav: false
    });
    const pageInfoRef = useRef(pageInfo);

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

    useEffect(() => {
        if (!theme) {
            return setTheme(themes["standard"]);
        }

        // Reset theme
        document.documentElement.style = null;

        // Set CSS variables
        if (theme.properties) {
            const properties = theme.properties;
            for (let key in properties) {
                for (let value in properties[key]) {
                    const propKey = `--${key}_${value}`;
                    const propValue = properties[key][value];
                    if (propValue.match(/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g)) {
                        const colorValue = hexToRgb(propValue);
                        document.documentElement.style.setProperty(
                            propKey,
                            `${colorValue.r}, ${colorValue.g}, ${colorValue.b}`
                        );
                    } else {
                        document.documentElement.style.setProperty(propKey, propValue);
                    }
                }
            }
        }

        // Load fonts
        if (theme.fonts) {
            WebFont.load(theme.fonts);
        }
    }, [theme]);

    useEffect(() => {
        pageInfoRef.current = pageInfo;
    }, [pageInfo]);

    useEffect(() => {
        let breakpoint = null;
        Object.keys(BREAKPOINTS).forEach((key) => {
            const keyNumber = parseInt(key, 10);
            if (
                pageInfo.windowWidth <= keyNumber &&
                (breakpoint === null || keyNumber < breakpoint)
            ) {
                breakpoint = keyNumber;
            }
        });
        setPageInfo({
            ...pageInfoRef.current,
            breakpoint: BREAKPOINTS[breakpoint]
        });
    }, [pageInfo.windowWidth]);

    useEffect(() => {
        if (navActive && subBarActive) {
            setSubBarActive(false);
        }
    }, [navActive]);

    const handleResize = () => {
        setPageInfo({
            ...pageInfoRef.current,
            windowWidth: window.innerWidth
        });
    };

    const updatePageInfo = (changes) => {
        setPageInfo({
            ...pageInfoRef.current,
            ...changes
        });
    };

    return (
        <AppContext.Provider
            value={{
                navActive,
                setNavActive,

                subBarActive,
                setSubBarActive,

                pageInfo,
                updatePageInfo,

                theme,
                setTheme
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

AppContainer.defaultProps = {
    theme: themes["standard"]
};
