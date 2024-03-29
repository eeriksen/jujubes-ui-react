import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import { AppContext } from "../AppContext";
import themes from "../../../styles/themes";
import { hexToRgb } from "../../../utils/colorUtils";
import WebFont from "webfontloader";
import "./AppContainer.scss";
import { DATE_TIME_FORMAT } from "./constants";
import { WindowResizeListener } from "../WindowResizeListener";

moment.defaultFormat = DATE_TIME_FORMAT;
moment.defaultFormatUtc = DATE_TIME_FORMAT;

export const AppContainer = ({ children, initialTheme }) => {
    const [navActive, setNavActive] = useState(false);
    const [subBarActive, setSubBarActive] = useState(false);
    const [theme, setTheme] = useState(initialTheme || themes["standard"]);
    const [pageInfo, setPageInfo] = useState({});
    const [crumbs, setCrumbs] = useState([]);
    const crumbsRef = useRef([]);

    useEffect(() => {
        if (!theme) {
            const themeIndex = themes.findIndex((t) => t.id === "standard");
            if (themeIndex >= 0) {
                setTheme(themes[themeIndex]);
            }
            return;
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
        if (navActive && subBarActive) {
            setSubBarActive(false);
        }
    }, [navActive]);

    const updatePageInfo = (changes) => {
        setPageInfo({
            ...pageInfo,
            ...changes
        });
    };

    const addCrumb = ({ id, link, label }) => {
        const crumbIndex = crumbsRef.current.findIndex((c) => c.id === id);
        if (crumbIndex < 0) {
            let updatedCrumbs = [...crumbsRef.current];
            updatedCrumbs.push({ id, link, label });
            crumbsRef.current = updatedCrumbs;
            setCrumbs(updatedCrumbs);
        }
    };

    const removeCrumb = (id) => {
        const crumbIndex = crumbsRef.current.findIndex((c) => c.id === id);
        if (crumbIndex >= 0) {
            let updatedCrumbs = [...crumbsRef.current];
            updatedCrumbs.splice(crumbIndex, 1);
            crumbsRef.current = updatedCrumbs;
            setCrumbs(updatedCrumbs);
        }
    };

    useEffect(() => {
        setCrumbs(crumbsRef.current);
    }, [crumbsRef.current])

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
                setTheme,

                crumbs,
                addCrumb,
                removeCrumb
            }}
        >
            {children}
            <WindowResizeListener />
        </AppContext.Provider>
    );
};

AppContainer.defaultProps = {
    theme: themes["standard"]
};
