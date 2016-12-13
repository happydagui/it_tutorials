# 从布局开始：Bootstrap 栅格布局
在项目中使用BootStrap的第一步该怎么做呢？首先，你需要弄清楚一个问题——栅格布局。

BootStrap栅格布局是灵活使用BootStrap的基础。**BootStrap将屏幕分为12等分**，在具体的DIV中，可以通过设置DIV的所占等分的数字确定其在屏幕中占有的宽度。如：

    <div class="row“><!--表示另起一行-->
      <div class="col-md-8" style="background-color:#778899;height:100px;"></div>
      <div class="col-md-4" style="background-color:#449D44;height:100px;"></div>
    </div>

在第一个DIV中class="col-md-8",第二个DIV中class="col-md-4", 其中‘8’和‘4’就是其DIV所占屏幕宽度的数值，加在一起等于‘12’。也就是第一个DIV占整个屏幕宽度的‘8/12’,第二个DIV占‘4/12’。 注：在上述代码中为了突显区块，我们设置了DIV的边框宽度为1像素黑色实线，高度设为100像素。

![效果](http://localhost:8000/docs/img/screenshot-layout-02.png)

*练习*
把布局划分改成左右各占一半，看看运行效果是怎么样的？ 

*布局屏幕分类*
**col-md-8**的含义是什么呢，表示在中等分辨率的屏幕上，这一列占据其父节点宽度的80%。前面说过，BootStrap是一种全响应的技术，那么针对不同的屏幕，它是怎么提供支持的呢？ 别担心，针对不同的显示屏幕尺寸，BootStrap提供了不同的栅格布局的属性：

- col-xs-* 超小屏幕 手机 (<768px)
- col-sm-* 小屏幕 平板 (≥768px)
- col-md-* 中等屏幕 桌面显示器 (≥992px)
- col-lg-* 大屏幕 大桌面显示器 (≥1200px)

*多个布局属性*

如果想让一个DIV在不同的屏幕中占有不同的屏宽该怎么做呢？ BootStrap允许我们在一个DIV中写多个类别的布局属性，从而让该DIV在不同的屏幕中呈现不同的屏宽。如：

      <div class="row">
          <div class="col-md-8 col-xs-6 col-lg-4"></div>
      </div>

该DIV在中等屏幕中占有‘8/12’，在手机中占有‘6/12’，在大屏幕中占有屏幕比例的‘4/12’。
上面的例子修改一下看看：

```
    <div class="row“><!--表示另起一行-->
      <div class="col-md-8" style="background-color:#778899;height:100px;"></div>
      <div class="col-md-4" style="background-color:#449D44;height:100px;"></div>
    </div>
```
在浏览最大化时：
![宽屏](http://localhost:8000/docs/img/screenshot-layout-02.png)
把浏览器窗口缩小后可以看到：
![窄屏](http://localhost:8000/docs/img/screenshot-layout-01.png)


*练习*
Dreamweaver CS6 新建HTML文档支持不同的布局模式，如下图所示
![](http://localhost:8000/docs/img/newhtml_dw.jpg)
使用 Bootstrap 尝试完成这些布局。
> 提示，使用 container-fluid 替代 container 可以创建满屏的布局。