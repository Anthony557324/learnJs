console.log('script start');

// setTimeout不能用作精确的计时器
// 按照队列的顺序检查并执行
setTimeout(function () {
    console.log('setTimeout');
}, 10)

Promise.resolve()
    .then(function () {
        console.log('promise1');
        setTimeout(() => {
            console.log('promise1 setTimeout');
        }, 1);
    })
    .then(function () {
        console.log('promise2');
    })

console.log('script end');

// macro queue, ['setTimeout']
// micro queue, ['promise1', 'promise2']