import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { AppContainer } from "../src/components/layout/AppContainer";

export const decorators = [
    (Story) => (
        <AppContainer>
            <Router>
                <Story />
            </Router>
        </AppContainer>
    )
];

export const parameters = {
    viewMode: "docs",
    layout: "fullscreen",
    options: {
        storySort: {
            order: ["Start", "Components", "Dynamics"]
        }
    }
};
