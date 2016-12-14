# JSX
> 本节通过几个例子对JSX支持的语法有个初步的印象即可

 JSX 是对 JS 的扩展，它看起来跟 XML 差不多，可以用来写 HTML，你可以认为 JSX 是一种更优雅的 HTML 写法。
 HTML 语言直接写在 JavaScript 语言之中，不加任何引号，这就是 JSX 的语法，它允许 HTML 与 JavaScript 的混写。
 JSX 的基本语法规则就是遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；遇到代码块（以 { 开头），就用 JavaScript 规则解析。JSX 允许直接在模板插入 JavaScript 变量。
 > JSX编译器的核心是将基于XML的语言编译成JS代码，主要是依赖于React.createElment函数。
 
## 基本语法
使用 JSX 来创建一个 HTML 标签，首字母小写：

    var link = <a href="xxx">Hello World!</a>;

相当于调用了 React.createElement 方法：

    var link = React.createElement('a', {href: 'xxx'}, 'Hello World!')

使用 JSX 来创建一个 Component，首字母大写：

    var HelloWorld = <HelloWorld foo="bar"></HelloWorld>

首字母的大小写有严格的区分，这样 JSX 可以很简单的通过区分首字母是小写还是大写来判断转换的是 HTML 标签还是自定义的 Component。

JSX 标签的标签都需要有完整的结束符号，否则编译会报错，例如：

    <input type="text" />

## 变量和逻辑

JSX 中可以通过 {xxx} 来插入一个 JavaScript 变量：

    var name = 'xiao ming';
    <a href="xxx">Hello {name}!</a>

没错，HTML 语法就是这样和 JavaScript 语法无缝的结合！
如果要在 JSX 中插入一段 JavaScript 代码，那么一次只能插入一个一次就能执行完的语句。

    var link = <a href="xxx">Hello {if (conditions) {'xiao ming'}}!</a>

上面的代码编译后会是这样的：

    var link = React.createElement('a', {href: 'xxx'}, if (conditions) {'xiao ming'})

编译后可以看到明显存在语法错误，可以使用*三元运算符*来将条件判断语句简化成一个语句：

    var link = <a href="xxx">Hello {conditions ? 'xiao ming' : ''}!</a>

## 多行语句和根节点

无论你的 JSX 代码有多长，每一段代码都 只能有一个根节点 ，否则编译通不过，因为 React 需要确保一个组件只能有一个根节点。

    // 错误的写法
    var btnBox = (
        <button>Click me</button>
        <p>hello world!</p>
    );
    // 正确的写法
    var btnBox = (
        <div>
            <button>Click me</button>
            <p>hello world!</p>
        </div>
    );

如果想在 JSX 中添加注释，需要使用多行注释的语法并确保其包裹在 {} 中。

    <div>
        <h3>title</h3>
        {/*<p>text</p>/*}
    </div>

## 关键字冲突

因为 JSX 是直接将 HTML 写在 JavaScript 代码中，如果在 HTML 中有的属性中有 JavaScript 的关键字，必须进行转换，转换规则和在 JavaScript 中使用 DOM 的 property 一样。如 *class* 需转换成 *className* ， *for* 要转换成 *htmlFor* ，还有其他的关键字这里不做一一列举。

**false in JSX**

false 在 JSX 中，会有不同的作用。

    <div id={false}>
        <input type="text" name="name" value={false} />
        <button type="button" name="button" disabled={false}>hello</button>
        <p>{false}</p>
    </div>

id={false} 和 value={false} 都换转换成字符串 false ， disabled={false} 是设置 disabled 属性为 false ， <p>{false}</p> 表示该 p 标签没有子元素。
Inline Style

## JSX中使用样式
可以将样式直接通过 JavaScript 的对象插入到 JSX 中，这样就可以给一个组件定义样式了。

    <div style={{color: '#ff0000', fontSize: '14px'}}>Hello World.</div>
或

    var paraStyle = {
        color: '#fff',
        fontSize: '14px'
    };
    var para = (
        <p style={paraStyle}></p>
    );

在定义样式的时候，对象的 key 就是样式的属性，属性中如果有中划线，需将其换成驼峰式， value 就是对应的属性值。对于一些复杂的伪类选择器，以及其他的一些高级的 CSS 特性，有相应的库可以对其支持。

将样式通过内联的形式写在组件内部，虽然有违分离原则，但是其确实解决了因为分离带来的组件独立性的问题，虽然是反模式化的，但确确实实解决了一个痛点。

## HTML转义

在组件内部添加html代码,并将html代码渲染到页面上。React默认会进行HTML的转义，避免XSS攻击，如果要不转义，可以这么写：

    var content='<strong>content</strong>';    

    React.render(
        <div dangerouslySetInnerHTML={{__html: content}}></div>,
        document.body
    );

## 命名空间

JSX 中还可以支持组件的命名空间，可以让组件的层次更清晰，更语义化。

var Form = React.createClass({ ... });
Form.Row = React.createClass({ ... });
Form.Label = React.createClass({ ... });
Form.Input = React.createClass({ ... });

    var App = (
        <Form>
            <Form.Row>
                <Form.Label />
                <Form.Input />
            </Form.Row>
        </Form>
    );


## 数组遍历

```
render() {
    var title = "JSX In Depth";
    var data = [{ 
        "when": "2 minutes ago",
        "who": "Jill Dupre",
        "description": "Created new account"
      }, {
        "when": "1 hour ago",
        "who": "Lose White",
        "description": "Added fist chapter"
      }, {
        "when": "2 hours ago",
        "who": "Jordan Whash",
        "description": "Created new account"
      }];
    return (
      <div className="App">
        <div className="App-header">
          <h2>{title}</h2>
        </div>
        <table>
        <thead><tr><th>When</th><th>Who</th><th>DESC</th></tr></thead>
        {data.map(function(row) {
          return (
            <tr><td>{row.when}</td><td>{row.who}</td><td>{row.description}</td></tr>
            );
        })}
        </table>
      </div>
    );
  }
```

## JSX中绑定事件

JSX让事件直接绑定在元素上。

    <button onClick={this.checkAndSubmit.bind(this)}>Submit</button>

和原生HTML定义事件的唯一区别就是JSX采用驼峰写法来描述事件名称，大括号中仍然是标准的JavaScript表达式，返回一个事件处理函数。

React并不会真正的绑定事件到每一个具体的元素上，而是采用事件代理的模式：在根节点document上为每种事件添加唯一的Listener，然后通过事件的target找到真实的触发元素。这样从触发元素到顶层节点之间的所有节点如果有绑定这个事件，React都会触发对应的事件处理函数。这就是所谓的React模拟事件系统。尽管整个事件系统由React管理，但是其API和使用方法与原生事件一致。

## 代码风格建议

为了代码有更好的可读性，无论是单行语句还是多行语句，都建议使用 () 来包裹 JSX 语句。在 JSX 中插入 JavaScript 语句的时候尽量不要嵌套太长的三目运算符，JSX 本身就是为了开发更简便和更好的维护性。如果把 JSX 也写成一坨一坨可读性很差的代码，实在太不应该了。 