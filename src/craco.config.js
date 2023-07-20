module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            const oneOfRule = webpackConfig.module.rules.find((rule) => Array.isArray(rule.oneOf));
            if (oneOfRule) {
                const cssRule = oneOfRule.oneOf.find((rule) => rule.test && rule.test.toString().includes('.css'));
                if (cssRule) {
                    cssRule.use = [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                            },
                        },
                    ];
                }
            }
            return webpackConfig;
        },
    },
};
