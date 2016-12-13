# Bootstrap 实战 ：搭建某多用户博客类网站首页
## 整体架构
一般而言首页设计几乎等同与整个网站设计，那么首页中到底应该放些什么内容才好呢？这要看网站有哪些主要的元素。本教程里要设计的网站首页是一个多用户博客类的网站首页，在该网站中用户可以发表博客，也可以推荐图书给其他用户。所以，首页中的板块包括这些应该是恰当的：

- 整站导航条
- 文章（博客）展示板块
- 图书展示板块
- 用户（会员）展示板块
- 脚注——footer部分

其中导航条和脚注是整个网站中都要用到的，具体实现时可以放在布局模板中

*板块划分*

根据上面的整体架构，我们将首页的板块分为以下几个：

1. 文章板块——将最新、最热的文章以标签页（tab）切换方式放在该模块中，为了页面美观，将有图片的文章的第一章图片放在轮换图片（caoursel）插件中,最右侧放置热门文章分类。样式如下图所示：
![](http://www.hubwiz.com/course/578dfbc816d03a7123dd6335/imgs/article.png)

2. 图书板块——按照图书的分类将图书放在首页中，点击不同的分类切换到不同的选项卡。图书展示使用自己开发的Jquery Tab插件，并将其整合到BootStrap环境中。最右侧同样是图书的分类。效果图如下所示：
![](http://www.hubwiz.com/course/578dfbc816d03a7123dd6335/imgs/bookes.png)

3. 用户板块——将新加入的用户和对社区贡献最多的用户放在首页中，效果图如下：
![](http://www.hubwiz.com/course/578dfbc816d03a7123dd6335/imgs/users.png)

## 使用 Bootstrap 搭建

要用到的BootStrap元素

那么，我么要用到哪些BootStrap元素才能很好的展示我们的板块内容呢？

1. 导航条
这里要用到固定在网页头部的导航条（navbar-fixed-top）,并在其中整合用户登录模块
2. 文章板块需要用到的BootStrap元素
1) 轮换图片插件（caoursel)——解决了展示图片时图片变形的问题。
2) 标签页插件（tabs）——对插件的样式进行了美化，并增加了自动切换功能。
3) 信息按钮（btn-info）组件——用它列出文章分类信息。
3. 图书板块需要用到的元素
1) 自己开发的Jquery Tab插件
2) 缩略图(thumbnail)组件
3) 分类标签(仿豆瓣)
4. 用户板块用到的BootStrap元素
1) BootStrap原生tab
2) 圆形图片（image_circle）

*第一步： 布局*
怎样的布局才能让网站中的文章以较好的形式呈现在首页上呢？既要反应更新，又要有精华。由于文章板块在首页上处于最上面的部分，所以，考虑使用轮换图片插件来吸引眼球，并且还需要展示最新的文章和热门文章以及文章分类。划分如下：

左部——轮换图片(carousel)和文章列表(tabs)部分，各占一半。 右部——文章分类部分。 左边占据（8/12），右边占据（4/12）

布局代码如下：

    <!--板块的左部，使用panel，占据8/12-->
    <div class="panel panel-default col-md-8">
          <!--轮换图片（carousel）插件,占左部的一半-->
          <div class="col-md-6">
                <!-- 键盘输入<bs3carousel按下tab键自动生成carousel代码 -->
              <div  class="carousel slide" ></div>
           </div>
        <!--文章tabs，占左部的一半-->
          <div class="noborder col-md-6">
                <!-- 键盘输入<bs3tabpanel按下tab键自动生成tabpanel代码-->
              <div class="tab" role="tabpanel">
              </div>
        </div>
    </div>
    <!--板块的右部，使用普通的DIV，占据4/12-->
    <div class="col-md-4">
    </div>

导航条代码

    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
       <div class="container">
         <div class="navbar-header">
          <a class="navbar-brand active" href="首页URL">顶求网</a>
          <a class="navbar-brand" href="图书页面URL">图书</a>
          <a class="navbar-brand" href="文章页面URL">文章</a>
        </div>
        <div class="btn-group" style="margin-top:10px; float:right;">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
              会员登陆 <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" role="menu">
               <LI><a href="会员登陆页面URL"  target="_top">会员登陆</a></LI>
               <LI><a href="会员注册页面URL"  target="_top">会员注册</a></LI>
            </ul>
        </div>
    </div>
     </div>
``
## 扩展 Bootstrap 来创建自定义内容

### 文章版块的自定义

文章显示 - 使用bootstrap thumbnail 显示，使用 bootstrap badge来设置推荐的格式

```
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div class="thumbnail text-center">
            <img src="images/koala.jpg" alt="">
            <div class="caption">
                <div><a href="#">Koala</a></div>
                <p> 评论(0)<span class="badge">2推荐</span> </p>
            </div>
        </div>
    </div>
```

### 图书版块的自定义

下面是默认的 tabpanel 代码片段

```
<div role="tabpanel">
        <!-- Nav tabs -->
        <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active">
                <a href="#home" aria-controls="home" role="tab" data-toggle="tab">home</a>
            </li>
            <li role="presentation">
                <a href="#tab" aria-controls="tab" role="tab" data-toggle="tab">tab</a>
            </li>
        </ul>
    
        <!-- Tab panes -->
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="home">...</div>
            <div role="tabpanel" class="tab-pane" id="tab">...</div>
        </div>
    </div>
```

我们可以上述代码片段分成三个部分 Nav tabs + Tab panes，以及他们的父节点(role="tabpanel")，我们如何把他分解到我们的默认的 bootstrap panel中去呢。请看

```
<div class="panel panel-default" role="tabpanel">
            <div class="panel-heading">
                <h3 class="panel-title">Panel title
        <!-- Nav tabs -->
        <ul class="nav nav-tabs pull-right" role="tablist">
            <li role="presentation" class="active">
                <a href="#home" aria-controls="home" role="tab" data-toggle="tab">home</a>
            </li>
            <li role="presentation">
                <a href="#tab" aria-controls="tab" role="tab" data-toggle="tab">tab</a>
            </li>
        </ul>
                </h3>
            </div>
            <div class="panel-body">
                <!-- Tab panes -->
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane active" id="home">...</div>
                    <div role="tabpanel" class="tab-pane" id="tab">...</div>
                </div>
            </div>
        </div>
```

> Nav tabs 现在放到了 panel-heading 中，使用 pull-right 放到了右边
> Tab panes 现在放到了 panel-body 中
> *role="tabpanel"* 放到了Nav tabs 和 Tab panes 的父节点中，也就是 panel 中
> 使用上述方式可以**保留 bootstrap tabs 的交互功能**，剩下的只不过需要定制外观就可以了。

### 用户版块的自定义

## 练习
