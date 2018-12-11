import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';



// automatically import all files ending in *.stories.js
const req = require.context('./stories', true, /.stories.js$/);
function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);

// Option defaults:
addDecorator(
    setOptions({
        name: "Kembo UI",
        url: "https://ui.kembo.app",
        addonPanelInRight: true
    })
);
