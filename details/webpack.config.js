const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry:'./src/index',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        // 根据匹配规则
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.js$/,
                include:[
                    path.resolve(__dirname,'src'),
                ],
                use:'babel-loader'
            }
        ]
    },
    resolve:{
        extensions:['.js','.css'],
        modules:[
            path.resolve(__dirname,'node_modules')
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'src/index.html'
        })
    ],
    // 指定一个配置项
    devServer:{
        port:'1314'
    }
}