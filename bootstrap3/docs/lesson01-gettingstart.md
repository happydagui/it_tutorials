# 快速开始

## 简单介绍
*Bootstrap 是什么*
BootStrap是基于HTML、CSS和JavaScript的框架，使你只需要写简单的代码就可以很快的搭建一个还不错的前端界面，它是后端程序员的福音，使他们只需要专注业务逻辑，而无须浪费太多的精力在界面设计上。

*全响应*
它可以开发**全响应式网页**——不论你使用手机、平板电脑、普通个人电脑浏览网站内容，所有的元素都可以很优雅的呈现，减轻了因为兼容性而带来的工作量。

*版本*
它的最新版本是4.0，国内目前用的较多的是3.x,本课程也基于BootStrap3.x版本。

*二次开发*
你可以使用默认的BootStrap样式、组件和插件，你也可以对其进行二次开发，甚至你还可以基于BootStrap环境使用自己开发的组件。

## 环境搭建
- 下载完整版本，登录[Bootstrap Official Site](http://getbootstrap.com/)下载完整版本
- 下载 jquery 2.x
- 安装 Sublime Text 3
- 为 sublime text 3 安装 Bootstrap 3 Snippets、HTMLBeautify、Emmet 插件
- 准备工作目录，创建第一个Bootstrap页面

> mkdir -p demo/vendor && cd demo && cp <dist_dir>/bootstrap-3.3.2-dist ./vendor && touch getting-start.html
> subl .

## 第一个页面

- 打开 *getting-start.html* 文件，输入 **html:5**，而后按下 Tab 键，自动会生成 HTML5 模板，在头部添加js和css文件的引用。
- 输入 **<bs3-jumbotron** 会自动提示，回车后自动生成Bootstrap组件代码（记得清除开始多余的一个左尖括号）
- 在 demo 目录运行 `python -m HTTPServer 8000` 打开网页浏览[http://localhost:8000/getting-start.html]

下面是完整的代码：

    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Bootstrap Application</title>
            <link rel="stylesheet" href="vendor/bootstrap-3.3.2-dist/css/bootstrap.min.css"/>
            <script src="vendor/jquery-2.2.3.min.js"></script>
            <script src="vendor/bootstrap-3.3.2-dist/js/bootstrap.min.js"></script>
        </head>
        <body>
            <div class="container-fluid">
                <div class="jumbotron">
                    <div class="container">
                        <h1>Hello, world!</h1>
                        <p>Contents ...</p>
                        <p>
                            <a class="btn btn-primary btn-lg">Learn more</a>
                        </p>
                    </div>
                </div>
                <div>
                    <button type="button" class="btn btn-success">button</button>
                    <button type="button" class="btn btn-info">button</button>
                    <button type="button" class="btn btn-danger">button</button>
                </div>
            </div>
        </body>
    </html>

![View](http://localhost:8000/docs/img/screenshot-gettingstart.png)

## 练习

- 使用 BootStrap CDN
- （可选）按需下载，如果你感觉整个BootStrap文件有些大的话，你也可按需定制你所需要的部分。 你可以访问http://v3.bootcss.com/customize/ 在线定制css、组件、javascript插件。