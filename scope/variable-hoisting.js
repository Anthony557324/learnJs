// 变量提升问题（变量声明提前）
// 编译器允许未定义先使用
// es2015，块级作用域不允许未定义先使用
var a = 1;

function test() {
    console.log(a);
    // 暂时性死区
    // 其他语言如果报错，是因为a没有定义，编译器报错
    var a = 2   // let a = 2  报错（块级作用域）
}

test()

// 函数声明提前
function f() {
    x();

    function x() {
        console.log(1);
    }
}

f();
// 代码等价于
function f() {
    function x() {
        console.log(1);
    }

    x();
}

f();

// 若换成函数表达式则报错
/**function f() {
  x();
  
  var x = function() {
    console.log(1);
  }
}

f(); */