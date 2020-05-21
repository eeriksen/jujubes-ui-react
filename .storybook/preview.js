import React from "react";
import {addParameters} from "@storybook/react";
import {create} from "@storybook/theming";
import { AppLayout } from "../src/components/layout/AppLayout";

addParameters({
    viewMode: 'docs',
    options: {
        panelPosition: 'bottom',
        theme: create({
            base: 'light',
            brandTitle: 'Kembo UI',
            brandUrl: 'https://www.kembo.app'
        })
    }
});
