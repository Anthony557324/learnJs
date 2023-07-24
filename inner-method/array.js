// pop,push,shift
const arr = [1, 2, 3, 4, 5];
const arr1 = [{ name: 1 }, { name: 2 }, { name: 3 }];

// 引用类型在做copy时，只是copy了引用地址：浅拷贝
// const test = arr1[0]     浅拷贝
// test.name = 2
// 深拷贝的意思为：新建一个对象，把原对象的属性值copy过来，如果属性值是引用类型，再把引用类型的属性值copy过来
const test = {
  name: arr1[0].name,
};
test.name = 2;
// 1.数组遍历
// const callback = function(item, index, arr){
//     console.log(item, index, arr);
// }
// arr.forEach(callback);

arr1.forEach(function (item) {
  console.log(item);
});

// arr1.forEach(function (item) {
//   // 如果原数组中的item是引用数据类型，那对引用数据类型的修改会影响原数组中的数据
//   // 一般情况下不这么做
//   item.name = item.name + 1;
// });
// console.log(arr1);

// 2.map
const newArr1 = arr1.map(function (item) {
  return { name: item.name + 1 };
});

console.log(newArr1);
console.log(arr1);

// 3.Array.isArray 判断是否是数组

// 4.every
const result = arr.every(function (item) {
  return item < 5;
});
console.log(result);

// 5.find 找出第一个满足条件的元素
const arr5 = [{ name: "ljq" }, { name: "xxx" }, { name: "ttt" }];
const arr5Result = arr5.find(function (item) {
  //   if (item.name === "ljq") {
  //     return true;
  //   }else{
  //     return false
  //   }
  return item.name === "ljq"; // 等同于上述if
});
console.log(arr5Result); // 结果为{name: "ljq"}

// const arr5Result = arr5.find(function (item) {
//     if (item.name === "ljq") {
//       return true;
//     }else{
//       return false
//     }
//   });   // 结果为underfined

// 5.1 findIndex
// findIndex() 方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。
const arr5ResultIndex = arr5.findIndex(function (item) {
  return item.name === "ljq";
});
console.log(arr5ResultIndex);
// if (arr5ResultIndex > -1) {
//   console.log("找到了");
// } else {
//   console.log("没找到");
// }

// 6.include

// 7.filter
// filter() 方法创建给定数组一部分的浅拷贝，其包含通过所提供函数实现的测试的所有元素
const arr7 = [
  { name: "1", isVip: true },
  { name: "2", isVip: false },
];
const arr7Result = arr7.filter(function (item) {
  return item.isVip; // 过滤VIP
  //   return !item.isVip;    过滤非VIP
});
console.log(arr7Result);

// 8.数组扁平化
const arr8 = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
const arr8Result1 = arr8.flat(1);
const arr8Result2 = arr8.flat(2);
console.log(arr8Result1);
console.log(arr8Result2);
// TODO:请将数组扁平化，不能用flat
// TODO:将一个对象深拷贝

// 9.join
const arr9 = [1, 2, 3, 4, 5];
// 默认是,
const arr9Result = arr9.join("");
console.log(arr9Result);

// 10.reverse反转数组

// 11.sort数组排序
const arr11 = [1, 3, 10, 4, 5];
arr11.sort(function (a, b) {
  // 排序规则
  return a - b; // 正序，b - a为逆序
});
console.log(arr11);

// 12.slice数组切分
const arr12 = [1,2,3,4,5]
const arr12Result = arr12.slice(1,3)
console.log(arr12Result);

// 13.splice
// 删除元素 splice(start, deleteCount)
// 添加元素 splice(start, 0, item1,item2)

// 14.reduce

// 15.unshift
// unshift在头部增加元素
// shift在头部删除元素
// push在尾部增加元素
// pop在尾部删除元素