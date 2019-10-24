var path = require("path")
var HtmlWebpackPlugin = require("html-webpack-plugin")
var webpack = require("webpack")
var Ext = require("extract-text-webpack-plugin")

module.exports = {
    entry : __dirname + "/src/main.js",
    output : {
        path : path.resolve(__dirname, "dist"),
        filename : "app.js",
        publicPath : "/"
    },
    devtool : "source-map",
    devServer : {
        contentBase : path.join(__dirname, "dist"),
        port : 8000,
        compress : true,
        hot : true,
        publicPath : "/",
        historyApiFallback : true,
        disableHostCheck : true,
        // openPage:'./src/page/login',
        open:true,
    },
    module : {
        rules : [
            {test : /\.css$/, loader:Ext.extract("css-loader")},
            {test : /.\less$/, loader:Ext.extract("css-loader!less-loader")},
            {test: /.\js/, exclude:/node_modules/,loader:"babel-loader?presets[]=env&presets[]=react&presets[]=stage-2"}
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            filename : "index.html",
            template : "index.html",
            inject : true
        }),
        new webpack.ProvidePlugin({
            React : "react"
        }),
        new Ext("app.css")
    ]
}