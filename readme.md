## Webpack
- 代码生产工艺  生产线  工作流(workflow)
- html + css + js = development
  html  template  {{}}
  css   stylus
  js    es6,7,8,9 => es5
  最后代码运行的env
  "build": "babel index.js -o babel-compile.js",
    "eslint": "eslint test.js",
    "test": "echo \"Error: no test specified\" && exit 1"

- npm run

- js
  babel 
  使用最新的技术开发，由babel编译为 es5

- yarn  facebook的包管理
  yarn add

- babel-core  babel的核心安装包
  核心的转译库 npm run build "babel..."

  babel-cli
  (load过程)
  babel-preset-env
  预编译规则  配合.babelrc 配置文件
  {
    "presets":["env"]
  }
  预处理搞定需要用插件

  build

- preset 预处理
  env 搞不定 安装插件
  {
    "plugins": ["transform-object-rest-spread"]
  }

- 插件
  babel-plugin-transform-object-reset-spread

- 使用eslint
  在package.json  script中添加
  "eslint": "eslint test.js"
  yarn add eslint
  npm run eslint
  需要一个配置文件

- webpack
  yarn add webpack webpack-li webpack-dev-server

##  "build":"webpack --mode development"
- webpack 是一切工作流的主宰
  "build":"webpack --mode development",
  "build":"webpack --mode production"

  /src 开发目录
  /dist  编译后的 上线目录

- 开发时  development 代码的可读性  dev阶段   在本地  localhost调试
  上线时  production  代码压缩,混淆代码 build 服务器上  域名访问
  测试    test  局域网  内网访问