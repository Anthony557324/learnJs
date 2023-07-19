// const a = 1
// a = 2    报错    每一个赋值的数据，需要
const a ={
    value: 1
}
a.value = 2


const test = {
    name: 1,
    age: 2
}

test.name = 2
// 以下代码会报错
// test {
//     name = 2,
//     age = 3
// }

console.log(test);
