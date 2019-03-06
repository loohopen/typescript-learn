const path = require('path');

module.exports = {
    mode: "development",
    devServer: {
        contentBase:  path.join(__dirname, ""),
        compress: true,
        index: path.join(__dirname, "./index.html"),
        inline: true,
        port: 8888
    },
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    devtool: "source-map",
    resolve: {
        "extensions": [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /.tsx?$/, loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre", test: /.js$/, loader: "source-map-loader"
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
}