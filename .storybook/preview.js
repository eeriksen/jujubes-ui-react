import React, { useState, useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";
import { AppContainer } from "../src/components/layout/AppContainer";
import { CUSTOM_THEMES_STORAGE_KEY, ACTIVE_THEME_STORAGE_KEY } from "./constants";
import { getData } from "./utils/storageUtils";
import themes from "../src/styles/themes";

const MainDecorator = ({ children }) => {
    const [theme, setTheme] = useState(null);
    const [busyLoading, setBusyLoading] = useState(true);

    useEffect(() => {
        const customThemes = getData(CUSTOM_THEMES_STORAGE_KEY);
        themes.concat(customThemes);
        const activeThemeId = getData(ACTIVE_THEME_STORAGE_KEY);
        if (themes && themes.length && activeThemeId) {
            const themeIndex = themes.findIndex((t) => t.id === activeThemeId);
            if (themeIndex >= 0) {
                setTheme(themes[themeIndex]);
            }
        }
        setBusyLoading(false);
    }, []);

    return !busyLoading ? <AppContainer initialTheme={theme}>{children}</AppContainer> : null;
};

export const decorators = [
    (Story) => (
        <MainDecorator>
            <Router>
                <Story />
            </Router>
        </MainDecorator>
    )
];

export const parameters = {
    viewMode: "docs",
    layout: "fullscreen",
    options: {
        showPanel: false,
        storySort: {
            order: ["Start", "Components", "Dynamics"]
        }
    }
};
