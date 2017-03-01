# JSX in Depth

(在 2016 年学 JavaScript 是一种什么样的体验)[http://www.techug.com/how-about-learn-javascript-at-2016]




# 属性传入组件的多种方式（JSX语法）

变量放在{}中

    var component = <Component foo={x} bar={y} />;

    var component = <Component />;
    component.props.foo = x; // 不推荐，最丑的做法
    component.props.bar = y; // 不推荐，颜值低得人可以这么干

//传入对象的方式传入属性

    var props = {};
    props.foo = x;
    props.bar = y;
    var component = <Component {...props} />;

//注意,后面会覆盖前面的

    var props = { foo: 'default' };
    var component = <Component {...props} foo={'override'} />;
    console.log(component.props.foo); // 输出为'override'

# JSX 陷阱（JSX做了一些处理防止XSS攻击）

// 会显示 “First · Second” 
    
    <div>{'First · Second'}</div>

// 它会显示 "First · Second"

    <div>First · Second</div>

// 正确做法，帅的人都这么干

    <div>{'First \u00b7 Second'}</div>
    <div>{'First ' + String.fromCharCode(183) + ' Second'}</div>

// 同时你还可以这样玩，加上[]，以数组的形式。

    <div>{['First ', <span>·</span>, ' Second']}</div>

//但是有的适合，我的项目中就需要这样干，就要原来的。
//给dangerouslySetInnerHTML传入一个对象，其中有一个__html属性，其中写了你的文本。

    <div dangerouslySetInnerHTML={{__html: 'First · Second'}} />

//假如你想加上自定义属性，必须加上data-前缀
//以aria-开头的属性页可以被渲染出来

    <div data-custom-attribute="foo" />
    <div aria-hidden={true} />

