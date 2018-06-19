const path = require("path"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
    const region = (env && env.NODE_ENV === "production") ? "production" : "development";
    return {
        mode: region,

        // Webpack development server setup.
        devServer: {
            stats: "errors-only",
            contentBase: path.join(__dirname, "dist"), // educate, Where to serve the file from. absolute path is prefered.
            compress: true, //enable the gzip.
            port: 5000, // Default to 8080.
            host: process.env.host, //defaault to localhost.
            clientLogLevel: "info", // manages log level: none, error, warning, info(default).
            open: true, //open the browser
            overlay: true // to show the compilation error in browser.
        },

        // There are different devtool options. refer: https://survivejs.com/webpack/building/source-maps/
        // cheap-module-eval-source-map - This is recommmened option for development.
        devtool: "cheap-module-eval-source-map",

        entry: ["./src/js/app.js"],

        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "app.[hash].js"
        },

        resolve: {
            modules: ["./", "node_modules", "src"],
            extensions: [".js", ".hbs"]
        },

        module: {
            rules: [{
                    test: /\.hbs$/,
                    loader: "handlebars-loader"
                },
                {
                    test: /.\js$/,
                    loader: "babel-loader",
                    include: [path.resolve(__dirname, "src")],
                    query: {
                        presets: ["env"]
                    },
                    exclude: []
                }
            ]
        },

        stats: {
            colors: true
        },

        plugins: [
            new CleanWebpackPlugin('dist'),
            new HtmlWebpackPlugin({
                hash: true,
                filename: 'index.html',
                template: './src/index.hbs',
                showErrors: true,
                inject: true
            }),
            new CopyWebpackPlugin([{
                from: path.resolve(__dirname, 'src', 'font'),
                to: path.resolve(__dirname, 'dist', 'font')
            }, {
                from: path.resolve(__dirname, 'src', 'img'),
                to: path.resolve(__dirname, 'dist', 'img')
            }])
        ]
    };
};