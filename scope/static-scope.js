// 作用域
// 1.静态作用域（词法作用域）
// 2.动态作用域
// JS中没有动态作用域

// 所有定义的变量在binding阶段，按照词法作用域进行（程序还未执行）
// 动态作用域，变量的binding，在执行阶段才进行
let x = 10  // x_global

function test() {
    console.log(x); // x_global
}

// 静态作用域binding的是变量，和变量值无关
// 变量的值需要在调用时才能知道是多少
test()
x = 30  // x_global
test()

function main() {
    let x = 20  // x_function
    test()
}

main()

