import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";
import logo from "./assets/jujubes-logo.png";

addons.setConfig({
    theme: create({
        base: "light",
        colorSecondary: '#3699ff',
        brandTitle: "FUCK UI",
        brandUrl: "https://fuck.jujubes.app",
        brandImage: logo
    })
});
