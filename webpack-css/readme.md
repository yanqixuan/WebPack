- yarn add webpack webpack-cli webpack-dev-servers
- "dev":"webpack --mode development"
- npm run dev
- 入口文件index.html
- webpack.config.js

#编译代码
webpack已经成为工作流程的霸主,vue-cli,编译过程和js的promise一样，是异步的
1. 写代码在dev过程中    src/
2. 上线在 build中       dist/
3. 启动web 服务器   webpack-dev-server

- webpack html template 
    plugin html-webpack-plugin
- log 不在根目录下，alias提供路劲缩写

    过程:从resolve extensions .js -> module 通过rules匹配.js文件 交给babel-loader去编译

    手动在json中添加 "babel-loader":"^7.1.4"
    - yarn add babel-core babel-cli babel-preset-env -D
    添加 .babelrc

    - babel-preset-env 将ES6转es5   能解决大部分问题，解决不了的用插件
    - babel-loader 有兼容性问题
    
    rules:[ //规则
        {
            test:/\.js$/,
            use:'babel-loader'
        }
    ]
    resolve:{   //解决
        extensions:['.js']
    }

    - 8080 由webpack-dev-server 启动了html-webpack-plugin     template ./src/index.html

#webpack
一切皆可打包,打包到js里,css对于js来说是个文本，
image对于js，打包成base64
但是css应该独立打包，性能优化的需要， 分文件加载，提高加载速度s