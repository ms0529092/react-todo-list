const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const appConfig = new HtmlWebpackPlugin({
    template:'./plugin/index.html',
    filename:'index.html',
    inject:true,
    chunks:['index']
});

const styleConfig = new ExtractTextWebpackPlugin({
    filename:'[name].css',
    allChunks:true
})

module.exports = {
    entry:{
        index:'./plugin/index.js'
    },
    output:{
        path:`${__dirname}/dist`,
        filename:'[name].js'
    },
    resolve:{

    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                },
            },
            {
                test:/\.(png|jpg)$/,
                use:[{
                    loader:'file-loader',
                    options:{
                        name:'[name].[ext]',
                        outputPath:'./static/images/'
                    }
                }]
            },
            {
                test:/\.html$/,
                use:[{
                    loader:'html-loader',
                    options:{
                        minimize:true
                    }
                }]
            },
            {
                test:/\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                })
            }
        ]
    },
    devServer:{
        port:3000,
        inline:true
    },
    plugins:[
        appConfig,
        styleConfig
    ]
}