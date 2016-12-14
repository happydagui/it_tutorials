# 组件以及基于组件的开发
React 是基于组件的开发思想，React 认为一个组件可以是一个完全独立的没有任何其他依赖的模块文件。一个组件中可以有自己的样式（Inline Style）和结构（JSX编写的HTML）。

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


## 组件状态，反应组件的动态变化

一个组件包含变化的因素，React 使用状态来表示，而不是改变组件的属性（特别不提倡）。

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



# How to compose simple components


## Fetching Ajax Data from GitHub using SuperAgent