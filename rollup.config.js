import nodeResolvePlugin from "rollup-plugin-node-resolve";
import babelPlugin from "rollup-plugin-babel";
import commonjsPlugin from "rollup-plugin-commonjs";
import postcssPlugin from "rollup-plugin-postcss";
import clearPlugin from "rollup-plugin-clear";
import autoExternalPlugin from "rollup-plugin-auto-external";
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
            extensions: [".js", ".jsx", ".scss"]
        }),
        postcssPlugin({
            modules: {
                generateScopedName: function (name, filename, css) {
                    if (filename.indexOf("/node_modules/") >= 0) {
                        return name;
                    } else {
                        return `_${hash({ name: name, filename: filename }).substring(0, 5)}`;
                    }
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
        })
    ]
};
