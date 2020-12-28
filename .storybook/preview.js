import React from "react";
import StoryRouter from "storybook-react-router";

export const decorators = [StoryRouter()];

export const parameters = {
    layout: "fullscreen",
    options: {
        storySort: {
            order: ['Start', 'Components']
        }
    }
};
