import { nodeResolve as nodeResolvePlugin } from "@rollup/plugin-node-resolve";
import { babel as babelPlugin } from "@rollup/plugin-babel";
import commonjsPlugin from "@rollup/plugin-commonjs";
import postcssPlugin from "rollup-plugin-postcss";
import clearPlugin from "rollup-plugin-clear";
import { terser as terserPlugin } from "rollup-plugin-terser";
import autoprefixer from "autoprefixer";
import url from "postcss-url";
import hash from "object-hash";
import cssnano from "cssnano";

import pkg from "./package.json";
import path from "path";

const SRC_DIR = path.resolve(__dirname, "src");
const DIST_DIR = path.resolve(__dirname, "dist");

export default {
    input: `${SRC_DIR}/index.js`,
    output: [
        {
            file: pkg.main,
            format: "cjs"
        },
        {
            file: pkg.module,
            format: "es"
        }
    ],
    external: ["react", "react-dom", "react-router-dom"],
    plugins: [
        clearPlugin({
            targets: [DIST_DIR] 
        }),
        nodeResolvePlugin({
            browser: true,
            extensions: [".js", ".jsx"]
        }),
        postcssPlugin({
            minimize: false,
            autoModules: false,
            modules: {
                generateScopedName: (name, filename, css) => {
                    // Ignore external CSS files
                    if (filename.indexOf("/node_modules/") >= 0) {
                        return name;
                    }

                    const componentName = filename.match(/^(.*)\/(.*)(\..*)$/)[2];
                    return `${componentName}-${name}_${hash({
                        name: name,
                        filename: filename
                    }).substring(0, 3)}`;
                }
            },
            extract: `${DIST_DIR}/styles.css`,
            plugins: [
                url({
                    url: "inline"
                }),
                autoprefixer,
                cssnano({
                    preset: [
                        "default",
                        {
                            calc: false
                        }
                    ]
                })
            ]
        }),
        babelPlugin({
            babelHelpers: "bundled"
        }),
        commonjsPlugin(),
        terserPlugin()
    ]
};
