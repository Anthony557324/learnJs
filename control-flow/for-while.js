const arr = [1, 2, 3, 4];

// 前置自增和后置自增
// 前置自增：先自增，再赋值
let ii = 0;
const a = ii++;
console.log(a);
console.log(ii);

// 后置自增：先赋值，再自增
const b = ++ii;
console.log(b);
console.log(ii);

for (
  /* 1 */ let i = 0, j = 1;
  /* 2 */ i + j < arr.length; // true 执行block; false 退出for循环
  /* 4 */ ++i, j++
) {
  /* 3 */
  console.log(arr[i]);
}

// 一个不好的地方，原数据很轻易被改变
const set = new Set([1, 3, 4]);
for (let i = 0; set.has(arr[i]); i++) {
  console.log(arr[i]);
}

// 不管怎样先执行一次，再判断条件
let i = 0
do {
  console.log('do while');
  i++
} while (i < 0);


// statement为真时，运行block中的代码
while (i < 0) {
  console.log('do while1');
  i++
}

