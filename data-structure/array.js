const arr = [1, 2, 3, 4, 5]
console.log(arr);

console.log(arr[0]);    // 1
console.log(arr[4]);    // 5
arr[0] = 2

console.log(arr);

const index = 3 // number
arr[index] = 2

console.log(arr);

// 多维数组
const arr2 = [[1],[2],[3],[4],[5]]

// 数组并不要求数据类型一致
// 元组
const arr1 = [1,'2',true,null,undefined,{name: 'aaa'}]
console.log(arr1);

// 稀疏数组
// 可以给任意位置赋值
const arr3 = [1]
arr3[100] = 100
console.log(arr3);