devDependcies   开发阶段
Dependcies      所有阶段
- webpack 打包工具 构建应用
    打包之前    位于dev阶段 src/目录
    打包之后    build       dist/目录   不再需要webpack 将部署到服务器

- 开发目录    src
- 在package.json中script中添加
    "dev":"webpack --mode development",
    "build":"webpack --mode product"

- npm run dev   进行打包 运行dev脚本
- npm run build 运行build脚本

##webpack-dev-server
- "start": "webpack-dev-server --mode development"
    webpack打包后，将打包后的内容在浏览器中8080端口启动，是前端开发的标准
它在一个端口打开web server，可以做实时的编译(HMR 热更新)

- 创建一个webpack.config.js配置页面
安装插件：yarn add html-webpack-plugin -D
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    module:{
        // 新建匹配规则
        rules:[
            {
                <!-- 安装 yarn add css-loader style-loader  -->
                test:/\.css$/,  //.css为后缀的文件
                use:['style-loader','css-loader']  //使用loader
            }
        ]
    },
    resolve:{
        extensions:['.css'],
        modules:[//要用到哪些模块
            path.resolve()
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',  //最后生成的文件名
            template:'src/index.html'   //模板
        })
    ],
    // 指定一个配置项
    devServer:{
        port:'1314'
    }
}

##webpack打包过程
打包过程,index.js是入口,打包成为main.js,index.html是首页的模板, main.js会由webpack-dev-server自动的放在index.html的最后面的script引入

- npm init -y
- yarn add webpack webpack-cli webpack-dev-server -D    开发阶段
- yarn add babel-core babel-cli babel-preset-env -D     开发阶段
- yarn add lodash   框架    任何阶段
