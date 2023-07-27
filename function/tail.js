// 尾递归优化
// 用递归的方式写1加到10
// function sum(n) {
//     if (n === 1) {
//         return 1;
//     } return n + sum(n - 1)
// }
function a() {
    console.log('a')
    return a();
}

a()