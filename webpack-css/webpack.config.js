const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports={
    entry:'./src/index',    //入口文件 js文件
    output:{    //出口
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                include:[   //只转义这个目录
                    path.resolve(__dirname,'src')
                ],
                use:'babel-loader'  //使用babel去编译文件 es6转es5
            },
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']   //两个 一个行内样式，一个css文件加载器
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader']
                })  //从main.js中提取出来
            }
        ]
    },
    resolve:{
        alias:{
            log$:path.resolve(__dirname,'src/utils/log.js') //__dirname项目根目录
        },
        extensions:['.js','.css']  //后缀
    },
    // 插件
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'src/index.html'   //模板
        }),
        new ExtractTextPlugin('[name].css')
    ]
}