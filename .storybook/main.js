const path = require("path");
const SRC_DIR = path.resolve(__dirname, "..", "src");

module.exports = {
    stories: ["../src/components/**/*.stories.@(js|mdx)", "./stories/*.stories.@(js|mdx)"],
    addons: [
        "@dump247/storybook-state/register",
        "@storybook/addon-actions/register",
        "@storybook/addon-docs"
    ],
    webpackFinal: async (config, { configType }) => {
        config.module.rules.push(
            {
                test: /\.css$/,
                loader: "style!css",
                include: [path.resolve(__dirname, "not_exist_path")]
            },
            {
                test: /\.scss/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[folder]-[local]_[hash:base64:5]"
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            plugins: () => [require("autoprefixer")()]
                        }
                    },
                    {
                        loader: "fast-sass-loader",
                        options: {
                            sourceMap: true,
                            includePaths: [`${SRC_DIR}/styles`]
                        }
                    }
                ]
            },
            {
                test: /(\.jsx|\.js)$/,
                enforce: "pre",
                exclude: /node_modules/,
                loader: "eslint-loader"
            }
        );

        return config;
    }
};
