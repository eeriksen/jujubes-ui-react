const rules = [
    {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
    },
    {
        test: /\.(scss)$/,
        use: [{
            loader: 'style-loader'
        }, {
            loader: 'css-loader',
            options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[folder]-[local]_[hash:base64:5]'
            }
        }, {
            loader: 'postcss-loader',
            options: {
                plugins: () => [
                    require('autoprefixer')({browsers: ['last 3 versions']})
                ]
            }
        }, {
            loader: 'sass-loader',
            options: {
                data: '@import "styles/base";',
                includePaths:[__dirname, 'src']
            }
        }]
    }
];

module.exports = (storybookBaseConfig) => {
    storybookBaseConfig.devtool = "cheap-module-eval-source-map";
    storybookBaseConfig.module.rules = storybookBaseConfig.module.rules.concat(rules);
    return storybookBaseConfig;
};
