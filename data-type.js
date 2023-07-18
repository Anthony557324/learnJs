// 1.underfined

// const/let/var/直接写变量名a=1
var a;

console.log(a)

// 2.null
// 一般对象的默认值是null
var b = null
console.log(b)

// 3.string
var c = "http://www.baidu.com"
var d = 'getsomething'
var e = `${c}/${d}`  //多行字符串，可以插入变量
var cd = c + '/' + d;   //不推荐
console.log(e)

// 4.number
//没有浮点类型和整型的区别
console.log(1)
console.log(1.1)

// 5. boolean true false
console.log(true)
console.log(false)

// es2015,symbol类型
//确保生成的变量不会重复
var symbolType1 = Symbol('key')
var symbolType2 = Symbol('name')
// == 数据类型转换，如果类型不同，先转换类型，再比较
// === 严格相等
console.log(symbolType1 === symbolType2)

// 6.typeof
// 用来查看数据类型
console.log(typeof false)
console.log(typeof 'false')