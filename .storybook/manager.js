import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";
import logo from "./assets/jujubes-logo.png";

addons.setConfig({
    theme: create({
        base: "light",
        colorSecondary: '#3699ff',
        brandTitle: "Jujubes UI",
        brandUrl: "https://ui.jujubes.app",
        brandImage: logo
    })
});
