# 组件以及基于组件的开发
React 是基于组件的开发思想，React 允许将代码封装成组件（component），然后像插入普通 HTML 标签一样，在网页中插入这个组件。React 认为一个组件可以是一个完全独立的没有任何其他依赖的模块文件。一个组件中可以有自己的样式（Inline Style）和结构（JSX编写的HTML）。

## 编写第一个组件，为组件赋予属性并在调用时赋值

编写组件需要继承*React.Component*类，重写*render*方法，下面的HelloTime组件可以显示当前的时间。

**HelloTime.js**
```
import React, { Component } from 'react';

export class HelloTime extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>现在的时间是：{this.props.date.toTimeString()}</div>
    );
  }
}

export default HelloTime;
```

在 **index.js** 中使用编写好的组件
```
ReactDOM.render(
  <HelloTime date={new Date()} />,
  document.getElementById('root')
);

```

> 组件的属性是静态的，在使用组件时赋值。

在调用组件时给组件的date属性赋值，组件中就可以获得该属性并显示。访问组件属性的方法是通过*this.props.<attribute>*。

## this.props.children

this.props 对象的属性与组件的属性一一对应，但是有一个例外，就是 this.props.children 属性。它表示组件的所有子节点（查看 demo05）。


    export default class NotesList extends Component {
      render: function() {
        return (
          <ol>
          {
            React.Children.map(this.props.children, function (child) {
              return <li>{child}</li>;
            })
          }
          </ol>
        );
      }
    }

    ReactDOM.render(
      <NotesList>
        <span>hello</span>
        <span>world</span>
      </NotesList>,
      document.body
    );

上面代码的 NoteList 组件有两个 span 子节点，它们都可以通过 this.props.children 读取，运行结果如下。


这里需要注意， this.props.children 的值有三种可能：如果当前组件没有子节点，它就是 undefined ;如果有一个子节点，数据类型是 object ；如果有多个子节点，数据类型就是 array 。所以，处理 this.props.children 的时候要小心。

React 提供一个工具方法 React.Children 来处理 this.props.children 。我们可以用 React.Children.map 来遍历子节点，而不用担心 this.props.children 的数据类型是 undefined 还是 object。更多的 React.Children 的方法，请参考官方文档。

## 组件状态，反应组件的动态变化

组件免不了要与用户互动，React 的一大创新，就是将组件看成是一个状态机，一开始有一个初始状态，然后用户互动，导致状态变化，从而触发重新渲染 UI 。一个组件包含变化的因素，React 使用状态来表示，而不是改变组件的属性（特别不提倡）。

**Incrementor.js**
```
import React, { Component } from 'react';

export default class Incrementor extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      total: this.props.initial
    };
  }
  inc() {
    this.setState({
      total: this.state.total + 1
    });
  }
  render() {
    return (
      <div>
        <h1>Result is : {this.state.total}</h1>
        <p><button onClick={this.inc.bind(this)}>Add</button></p>
      </div>
    );
  }
}

```


**index.js**
```
ReactDOM.render(
  <Incrementor initial={100} />,
  document.getElementById('root')
);
```

Changing a React Component’s State with setState()


## State vs Props in React

## Handling Events with JSX: onClick

Composite Dynamic Components and Forms


## 组件化以及基于组件化的开发

虚拟DOM(virtual-dom)不仅带来了简单的UI开发逻辑，同时也带来了组件化开发的思想，所谓组件，即封装起来的具有独立功能的UI部件。React推荐以组件的方式去重新思考UI构成，将UI上每一个功能相对独立的模块定义成组件，然后将小的组件通过组合或者嵌套的方式构成大的组件，最终完成整体UI的构建。例如，Facebook的instagram.com整站都采用了React来开发，整个页面就是一个大的组件，其中包含了嵌套的大量其它组件，大家有兴趣可以看下它背后的代码。

如果说MVC的思想让你做到视图-数据-控制器的分离，那么组件化的思考方式则是带来了UI功能模块之间的分离。我们通过一个典型的Blog评论界面来看MVC和组件化开发思路的区别。

对于MVC开发模式来说，开发者将三者定义成不同的类，实现了表现，数据，控制的分离。开发者更多的是从技术的角度来对UI进行拆分，实现松耦合。

对于React而言，则完全是一个新的思路，开发者从功能的角度出发，将UI分成不同的组件，每个组件都独立封装。

在React中，你按照界面模块自然划分的方式来组织和编写你的代码，对于评论界面而言，整个UI是一个通过小组件构成的大组件，每个组件只关心自己部分的逻辑，彼此独立。

!()[components.jpg]

React认为一个组件应该具有如下特征：

1. 可组合（Composeable）：一个组件易于和其它组件一起使用，或者嵌套在另一个组件内部。如果一个组件内部创建了另一个组件，那么说父组件拥有（own）它创建的子组件，通过这个特性，一个复杂的UI可以拆分成多个简单的UI组件；

2. 可重用（Reusable）：每个组件都是具有独立功能的，它可以被使用在多个UI场景；

3. 可维护（Maintainable）：每个小的组件仅仅包含自身的逻辑，更容易被理解和维护；


# How to compose simple components


## Fetching Ajax Data from GitHub using SuperAgent



PropTypes - 类型约束

为了性能考虑，只在开发环境验证 propTypes
对于我这种没有队友的人来说，感觉鸡肋，多此一举，大家不喜欢就跳过吧~我也跳了。

getDefaultProps


获取真实的DOM节点




把自身所有属性，传给子组件

```
  <Child {...this.props}>hello</Child>
```

把自身部分传给子组件

利用了ES6的析构特性

```
var { checked, ...other } = this.props;
return (<Child {...other} />);
```
