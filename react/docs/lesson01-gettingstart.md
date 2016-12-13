# Notes for React
**简介**
React是Facebook开源的一个用于构建用户界面的Javascript库，已经 应用于Facebook及旗下Instagram。
和庞大的AngularJS不同，React专注于MVC架构中的V，即视图。 这使得React很容易和开发者已有的开发栈进行融合。
React顺应了Web开发组件化的趋势。应用React时，你总是应该从UI出发抽象出不同 的组件，然后像搭积木一样把它们拼装起来：
不过，React定义组件的方式和AngularJS截然不同。如果说HTML是一个轮子，AngularJS 的指令/Directive则是给这个轮子镶了个金边，而React，重新造了个轮子： JSX。
React抛弃HTML另起炉灶的原因之一是性能的考虑：DOM操作非常之慢。React引入了 虚拟DOM的概念：开发者操作虚拟DOM，React在必要的时候将它们渲染到真正的 DOM上 —— 有点像游戏开发中的双缓冲区/Double Buffer帧重绘。

引入虚拟DOM的另一个好处是，容易引入不同的渲染引擎。比如将你的应用代码渲染 到真实的DOM，或者nodejs服务端的无头DOM，或者，iOS/Android平台组件 —— 这就是 React Native.
**准备工作**
- firefox + React Developer Tools(addon)
- sublime text 3 +  (babel-sublime)[https://github.com/babel/babel-sublime] + (babel-sublime-snippets)[https://github.com/babel/babel-sublime-snippets]
- create-react-app:来自Facebook官方的零配置命令行工具
> 通过nodejs安装 `npm install -g create-react-app`

## create a react app with cli
创建 react 应用
```
create-react-app my-app
cd my-app && npm start
```
启动浏览器，进入 [http://localhost:3000/] 浏览。






## 练习

### 关于 Babel 插件的安装

Find it as [**Babel**](https://packagecontrol.io/packages/Babel) through [Package Control](https://packagecontrol.io/).

#### Setting as the default syntax

To set it as the default syntax for a particular extension:
  1. Open a file with that extension,
  2. Select `View` from the menu,
  3. Then `Syntax` `->` `Open all with current extension as...` `->` `Babel` `->` `JavaScript (Babel)`.
  4. Repeat this for each extension (e.g.: `.js` and `.jsx`).

#### Setting a Color Scheme

`Babel` comes bundled with `Next` and `Monokai` from [Benvie/JavaScriptNext.tmLanguage](https://github.com/Benvie/JavaScriptNext.tmLanguage). Select one from `Preferences` `->` `Color Scheme` `->` `Babel`

#### Snippets

Find them separately at [babel/babel-sublime-snippets](https://github.com/babel/babel-sublime-snippets) or as [**Babel Snippets**](https://packagecontrol.io/packages/Babel Snippets) through [Package Control](https://packagecontrol.io/).

#### 在线练习
[http://codepen.io/gaearon/pen/ZpvBNJ?editors=0010re]，无需安装任何开发环境。

## 拓展
如果你使用npm run build来编译得到生产环境，此时代码会被编译到build目录下，此时会自动将整个应用打包发布，它会自动使用Webpack控件进行优化与压缩。
