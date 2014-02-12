
一个基于 [七牛云存储](http://www.qiniutek.com) [NodeJS SDK](https://github.com/qiniu/nodejs-sdk) 开发的 Ajax 上传（[jQuery-File-Upload](http://blueimp.github.com/jQuery-File-Upload/)）示例程序。

## 运行环境依赖

- [NodeJS](http://nodejs.org/) 0.8.x 或以上版本
- [npm](http://npmjs.org/)
- [express](http://expressjs.com/)
- [qiniu](http://search.npmjs.org/#/qiniu)

## 安装和运行程序

1. 安装依赖库

    `npm install `

2. 获取示例程序源代码：

    `git clone git://github.com/qiniu/nodejs-ajax-upload-example.git`

或者直接下载源码包：[https://github.com/qiniu/nodejs-ajax-upload-example/tags](https://github.com/qiniu/nodejs-ajax-upload-example/tags)

3. 编辑 `nodejs-ajax-upload-example/app/server.js` 文件， 修改其中配置项 `qiniu.conf.ACCESS_KEY` 和 `qiniu.conf.SECRET_KEY` 的值。参考 [应用接入：获取Access Key 和 Secret Key](http://docs.qiniutek.com/v2/api/auth/#app-access)

4. 在 `nodejs-ajax-upload-example/app` 目录下运行命令：`node index.js`

5. 用浏览器打开 `nodejs-ajax-upload-example/public/index.html` 进行体验

## 说明

1. WEB 上传所用的开源组件参见：[jQuery-File-Upload](https://github.com/blueimp/jQuery-File-Upload)

## 资源

- [七牛云存储官方网站](http://www.qiniutek.com)
- [七牛云存储开发者中心](https://dev.qiniutek.com)
- [七牛云存储API和SDK文档](http://docs.qiniutek.com)
- [七牛云存储SDK源代码](https://github.com/qiniu)
