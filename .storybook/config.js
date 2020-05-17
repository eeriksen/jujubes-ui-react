import { configure, addParameters } from '@storybook/react';
import customTheme from "./customTheme"

addParameters({
    options: {
        panelPosition: 'right',
        theme: customTheme
    }
});

// automatically import all files ending in *.stories.js
const req = require.context('./stories', true, /.stories.js$/);
function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);

