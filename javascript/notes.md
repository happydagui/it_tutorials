
parseInt和parseFloat 可转换第一个无效字符之前的数字，而Number()函数转换全部值

```
> parseInt('12131nfdf')
12131
> Number('12121nff')
NaN
> isNaN(Number('12121nff'))
true
```

> 可以看出，两者都不产生异常，parseInt产生有效的整数值，而Number返回NaN


```
> var s = 'xxx';
undefined
> var so = new String('xxx');
undefined
> s==so
true
> s===so
false
> typeof(s)
'string'
> typeof(so)
'object'
> 

```


```
> var o={x:1,y:2}
undefined
> o.constructor
[Function: Object]
> o.constructor.prototype
{}
> o.prototype
undefined
> 
> o.constructor.prototype==o.__proto__
true
> Object.prototype
{}
> 
> typeof(String)
'function'
> typeof(Number)
'function'
> Object
[Function: Object]
> Number
[Function: Number]
```