function test(){
    console.log(test.caller);   // 查看调用对象
    console.log('test');
    return 'hello'
}

// const obj = {
//     name: 1,
//     age: 2
// }

// test();

const fn = function test() {
    console.log('test');
}

// 匿名函数
const fn1 = function() {
  console.log('test');
}

fn1()
