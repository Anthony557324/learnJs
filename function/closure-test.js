// 实现一个函数，函数返回柯里化函数
add(1, 2, 3, 4)
// function add(a, b, c, d) { return a + b + c + d }
mul(1, 2)
// function mul(a, b) {return a * b}

function add(a, b, c, d) {
    return addCurrying(a)(b)(c)(d)
}

function mul(a, b) {
    return mulCurrying(a)(b)
}

function addCurrying(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a + b + c + d
            }
        }
    }
}

function mulCurrying(a) {
    return function (b) {
        return a * b
    }
}

function currying() {
    // TODO: ??

}
const addCurrying = currying(add)
const mulCurrying = currying(mul)
console.log(addCurrying);

