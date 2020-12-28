import nodeResolvePlugin from "rollup-plugin-node-resolve";
import babelPlugin from "rollup-plugin-babel";
import commonjsPlugin from "rollup-plugin-commonjs";
import postcssPlugin from "rollup-plugin-postcss";
import clearPlugin from "rollup-plugin-clear";
import autoExternalPlugin from "rollup-plugin-auto-external";
import { terser } from "rollup-plugin-terser";
import autoprefixer from "autoprefixer";
import url from "postcss-url";
import cssnano from "cssnano";
import hash from "object-hash";

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
    plugins: [
        autoExternalPlugin(),
        clearPlugin({
            targets: [DIST_DIR]
        }),
        nodeResolvePlugin({
            browser: true,
            extensions: [".js", ".jsx", ".scss", ".css"]
        }),
        postcssPlugin({
            minimize: true,
            autoModules: false,
            modules: {
                generateScopedName: (name, filename, css) => {

                    // Ignore external CSS files
                    if (filename.indexOf("/node_modules/") >= 0) {
                        return name;
                    }

                    const componentName = filename.match(/^(.*)\/(.*)(\..*)$/)[2];
                    return `${componentName}-${name}_${hash({ name: name, filename: filename }).substring(0, 3)}`;
                }
            },
            extract: `${DIST_DIR}/styles.css`,
            plugins: [
                url({
                    url: "inline"
                }),
                autoprefixer,
                cssnano
            ]
        }),
        babelPlugin({
            exclude: "node_modules/**"
        }),
        commonjsPlugin({
            namedExports: {
                "node_modules/react-tippy/dist/react-tippy.js": ["Tooltip"]
            }
        }),
        terser()
    ]
};
