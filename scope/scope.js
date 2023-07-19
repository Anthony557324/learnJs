// 作用域
// es2015之前只有全局作用域和函数作用域
// es2015之后增加了一个块级作用域
// with作用域 eval作用域

// 1.全局作用域
a = 1
// 直接写变量
// var 声明全局变量(没在函数声明时)
// 2.函数作用域
function fn(){
    var b = 2
    console.log(b); //可以取到b
}

fn()

// console.log(b); // b在函数内部，取不到

// 3.块级作用域
// const let 声明块级作用域
{
    const c = 3
    var d = 2   // 全局
    let e = 5
    console.log(e);
}
// console.log(c);  // 取不到c
console.log(d);
// 例子2
{
    let ljqout = 2
    {
        console.log(ljqout);
        let ljq = 1
    }
}
// console.log(ljq);

// 作用域查找时，先找当前作用域，再找上一级作用域，直到全局作用域