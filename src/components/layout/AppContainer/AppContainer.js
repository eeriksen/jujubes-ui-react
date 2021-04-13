import React, { useState, useEffect } from "react";
import moment from "moment";
import { AppContext } from "../AppContext";
import * as themes from "../../../styles/themes";
import { hexToRgb } from "../../../utils/colorUtils";
import WebFont from "webfontloader";
import "./AppContainer.scss";
import { DATE_TIME_FORMAT } from "../../../constants";

moment.defaultFormat = DATE_TIME_FORMAT;
moment.defaultFormatUtc = DATE_TIME_FORMAT;

const STANDARD_THEME_KEY = "standard";

export const AppContainer = ({ children }) => {
    const [navActive, setNavActive] = useState(false);
    const [subBarActive, setSubBarActive] = useState(false);
    const [currentPage, setCurrentPage] = useState({
        hasButtons: false
    });
    const [themeKey, setThemeKey] = useState(STANDARD_THEME_KEY);

    useEffect(() => {
        if (themeKey) {
            if (!themes[themeKey]) {
                console.error('Not a valid theme: "%s"', themeKey);
                loadTheme(themes[STANDARD_THEME_KEY]);
            } else {
                loadTheme(themes[themeKey]);
            }
        }
    }, [themeKey]);

    /**
     * Load a theme
     * @param {*} theme
     */
    const loadTheme = (theme) => {
        // Set CSS variables
        if (theme.options) {
            const themeOptions = theme.options;
            for (let value in themeOptions) {
                if (themeOptions[value].match(/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g)) {
                    const colorValue = hexToRgb(themeOptions[value]);
                    document.documentElement.style.setProperty(
                        `--${value}`,
                        `${colorValue.r}, ${colorValue.g}, ${colorValue.b}`
                    );
                } else {
                    document.documentElement.style.setProperty(`--${value}`, themeOptions[value]);
                }
            }
        }

        // Load fonts
        if (theme.fonts) {
            WebFont.load(theme.fonts);
        }
    };

    return (
        <AppContext.Provider
            value={{
                navActive,
                setNavActive,

                subBarActive,
                setSubBarActive,

                currentPage,
                setCurrentPage,

                themeKey,
                setThemeKey,

                loadTheme
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
