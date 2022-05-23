const path = require('path')  
const webpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpackMode = process.env.NODE_ENV || 'development';
module.exports = {
 
    name: 'react-project',
    
    mode: webpackMode,
 
    resolve: {
        extensions: ['.js', '.jsx']
    },
    
    entry: {
        app: ['./src/index.jsx']
    },
 
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader', 
            options: {
                presets: [
                    ['@babel/preset-env', {  
                        targets: {
                            browsers: [  
                                'last 2 chrome versions',
                                '> 5% in KR'
                            ]
                        },
                        debug: true
                    }],  
                    '@babel/preset-react'  
                ],
                plugins: [
                    'react-refresh/babel'
                ]
            }
        },
        {
            test: /\.css$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    //
                }
            },
            'css-loader'
            ]
        }]
    },
 
    plugins: [
        new webpackPlugin(),
        new MiniCssExtractPlugin({ filename: 'style.css' }) 
    ],
 
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
 
    devServer: {
        proxy: {
            '/api': {
            target: 'http://54.180.79.114/5000/',
            changeOrigin: true,
            }
        },
        static: {
            directory: path.join(__dirname, 'public')
        },
        compress: true,
        hot: true,
        historyApiFallback: true 
    },
 
}