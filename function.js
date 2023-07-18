// 函数
// 数学上 y=f(x) x -> y
// x当做入参
// y当做输出
// 函数的定义
function add (a,b,c) {
    // 各种各样的表达式
    // return返回单个值
    var d = a + b + c
    console.log(d);
    return d
    // 不写return 函数隐士返回值是undefined
}

// 函数的调用
// 函数名()组成
add(1, 2, 3)

var result = add()
// console.log(typeof result);
// console.log(1 / 0);
// console.log(Infinity);

// 函数重载，同一个函数名的函数，会因为参数个数和类型的不同而执行不同的逻辑
// js没有函数重载
// 函数的覆盖（谁在后听谁的）