import React, { useState, useEffect } from "react";
import moment from "moment";
import { AppContext } from "../AppContext";
import { WindowResizeListener } from "../WindowResizeListener";
import * as themes from "../../../styles/themes";
import { hexToRgb } from "../../../utils/colorUtils";
import WebFont from "webfontloader";
import "./AppContainer.scss";
import { DATE_TIME_FORMAT, BREAKPOINTS } from "../../../constants";

moment.defaultFormat = DATE_TIME_FORMAT;
moment.defaultFormatUtc = DATE_TIME_FORMAT;

const STANDARD_THEME_KEY = "standard";

export const AppContainer = ({ children, theme }) => {
    const [themeKey, setThemeKey] = useState(STANDARD_THEME_KEY);
    const [navActive, setNavActive] = useState(false);
    const [subBarActive, setSubBarActive] = useState(false);
    const [pageInfo, setPageInfo] = useState({
        breakpoint: null,
        hasButtons: false
    });

    useEffect(() => {
        if (themeKey && !theme) {
            if (!themes[themeKey]) {
                console.error('Not a valid theme: "%s"', themeKey);
                loadTheme(themes[STANDARD_THEME_KEY]);
            } else {
                loadTheme(themes[themeKey]);
            }
        }
    }, [themeKey, theme]);

    useEffect(() => {
        if(theme){
            loadTheme(theme);
        }
    }, [theme]);

    /**
     * Load a theme
     * @param {*} theme
     */
    const loadTheme = (theme) => {

        // Use standard if missing
        if(!theme){
            theme = themes[STANDARD_THEME_KEY];
        }

        // Set CSS variables
        if (theme.properties) {
            const themeProperties = theme.properties;
            for (let value in themeProperties) {
                if (themeProperties[value].match(/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g)) {
                    const colorValue = hexToRgb(themeProperties[value]);
                    document.documentElement.style.setProperty(
                        `--${value}`,
                        `${colorValue.r}, ${colorValue.g}, ${colorValue.b}`
                    );
                } else {
                    document.documentElement.style.setProperty(
                        `--${value}`,
                        themeProperties[value]
                    );
                }
            }
        }

        // Load fonts
        if (theme.fonts) {
            WebFont.load(theme.fonts);
        }
    };

    const updateBreakpoint = () => {
        const windowWidth = window.innerWidth;
        let breakpoint = null;
        Object.keys(BREAKPOINTS).forEach((key) => {
            const keyNumber = parseInt(key, 10);
            if (windowWidth <= keyNumber && (breakpoint === null || keyNumber < breakpoint)) {
                breakpoint = keyNumber;
            }
        });
        setPageInfo({
            ...pageInfo,
            breakpoint: BREAKPOINTS[breakpoint]
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
                setPageInfo,

                themeKey,
                setThemeKey,

                loadTheme
            }}
        >
            {children}
            <WindowResizeListener onInit={updateBreakpoint} onResize={updateBreakpoint} />
        </AppContext.Provider>
    );
};
