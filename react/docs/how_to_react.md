

# webstorm 2016
选择“license server” 输入：http://114.215.133.70:41017


# Notes for React


## redux

view直接触发dispatch；
将action发送到reducer中后，根节点上会更新props，改变全局view。

- 可计算的属性名
```
let type="foo";
this.setState({ [type]: 'hello world' });
```
> [type] 称之为可计算的属性名，使用type的值作为键值而不是type

## react
- react-addons-update: ReactJS by Examples (pdf), chapter 7.1
 > [https://facebook.github.io/immutable-js/
docs/]


## sample apps
Kanban App - Pro React (2015)
Blog - Mastering React

Kanban - SurviveJs
bleeding-edge-sample-app - https://github.com/backstopmedia/bleeding-edge-sample-app


## common lib
react
react-addons-update

redux
redux-router/redux-simple-router

redux-thunk
superagent
chance

## jquery
var $=require('jquery')

> npm install --save jquery







## 有关React.JS的书籍

**适合初学者**

- Learning React Native: Building Native Mobile Apps with
JavaScript

- SurviveJS - Webpack and React: From apprentice to master

- ReactJS Cookbook

**适合中级水平的**

- ReactJS by Example- Building Modern Web Applications with React

- ReactJS: For Web App Development

- React.js Essentials

** 适合高级水平的 **

- Pro React
- ReactJS: Become a professional in web app development
- Mastering React

> 每本书的详细资料请浏览[https://www.livecoding.tv/categories/react-js/history/]