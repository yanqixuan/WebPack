## rollup
tree shaking
没用到的代码 不会被打包

## parcel
零配置

## webpack 4.0
webpack --mode production 打包脚本会自动开启 tree shaking
作用域里的代码不会分析，会全部打包

## sync 同步方法  async 异步方法
异步加载的代码  
有些代码可能并不会使用，所以不在一开始就进行打包，当用户使用时才加载
import(/* webpackChunkName:'async' */) magic comment 魔法注释  用来异步加载模块

import home from lazy:!/components/home,
用 babel-loader 检测有没有 lazy!
换成magic comment

## css-module
解决命名冲突
利用 hash 值 解决重复命名

## css单独打包
HtmlWebpackPlugin 将js插入到html下

mini-css-extract-plugin + PurifyCSS Plugin