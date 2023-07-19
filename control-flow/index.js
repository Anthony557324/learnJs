// === >= <= !==

// 多个条件
// &&（与） ||（或）
// &&：两个条件都为真结果才为真
// ||：两个条件有一个为真，结果就为真
// ！：取反

console.log(!true);
console.log(true && true);
console.log(true && false);
console.log(true || false);

const aaa = 'ljq'
if (aaa === 'ljq') {
    console.log('是ljq')
} else if (aaa === 'ceshi') {
    console.log('是ceshi')
} else {
    console.log('是其他')
}