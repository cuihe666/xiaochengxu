# app

> A Mpvue project

## Build Setup

``` bash
# 初始化项目
vue init mpvue/mpvue-quickstart myproject
cd myproject

# 安装依赖
yarn

# 开发时构建
npm run dev

# 打包构建
npm run build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm run dev:wx
npm run dev:swan
npm run dev:tt
npm run dev:my

# 指定平台的打包构建
npm run build:wx
npm run build:swan
npm run build:tt
npm run build:my

# 生成 bundle 分析报告
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).




#以上为项目框架初始化的配置，由于框架需要贴合项目开发需求，所以进行了构建、打包配置，一下为正确的打包、构建流程

#小程序构建
npm run dev

#小程序本地、测试环境的打包
npm run build--test:wx
#小程序生产环境的打包
npm run build--prod:wx


#其他平台区分环境的打包构建还未进行配置，如需配置，请依照微信相关的进行配置
