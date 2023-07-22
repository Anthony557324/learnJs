// 回调函数（和API没任何关系，和异步也没有任何关系）
// 函数作为参数传递给另一个函数

// platform平台api
// 我们自己传递的函数

// platform 执行完会得到一个数字1
function platform(/* a变量要传递一个函数 */ a) {
  a();
}

// 回调函数，被一个第三方函数调用
const fn = function () {
  console.log("我是一个函数");
};

// 作为函数传递给第三方api
platform(fn);

// 自定义的此platform函数不通过return返回值，而是通过回调函数的参数传递回返回值

// 参数位置问题
function test(obj){
    const {a, b, c} = obj;  // const{a: first} 变量的重命名
    // const a = obj.a
    // const b = obj.b
    // const c = obj.c

    console.log(obj.a, obj.c);
}

test({a: 1,b: 2,c: 3})
