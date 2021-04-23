import React, { useContext, useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";
import { AppContext } from "../src/components/layout";
import { AppContainer } from "../src/components/layout/AppContainer";
import { CUSTOM_THEMES_STORAGE_KEY, ACTIVE_THEME_STORAGE_KEY } from "./constants";
import { getData } from "./utils/storageUtils";

const ThemingWrapper = ({ children }) => {
    const { loadTheme } = useContext(AppContext);
    useEffect(() => {
        const themeList = getData(CUSTOM_THEMES_STORAGE_KEY);
        const activeThemeId = getData(ACTIVE_THEME_STORAGE_KEY);
        if (themeList && themeList.length && activeThemeId) {
            const themeIndex = themeList.findIndex((t) => t.id === activeThemeId);
            if (themeIndex >= 0) {
                setTimeout(() => {
                    loadTheme(themeList[themeIndex]);
                }, 100);
            }
        }
    }, []);
    return children;
};

export const decorators = [
    (Story) => (
        <AppContainer>
            <ThemingWrapper>
                <Router>
                    <Story />
                </Router>
            </ThemingWrapper>
        </AppContainer>
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
