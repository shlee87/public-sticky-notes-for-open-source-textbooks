const path = require('path');

module.exports = {
    entry: {
        login: './src/login.js',
        note: './src/note.js',
        highlighter: './src/stickit-highlighter.js',
        background: './src/background.js',
        saveHighlight: './src/saveHighlight.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};