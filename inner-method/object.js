// 1.assign
const target = {
    name: 1,
    age:2
}

// const arr = [{name: 1}, {age: 2}]

const source = {
    address: 'xxx',
    name: 2
}
// obj和target指向同一个对象
const obj = Object.assign(target,source)
console.log(obj);

// defineProperty

// 2.entries
// 函数式语言中推崇链式调用
const result = Object.entries(obj)
  .map(function (item) {
    return `${item[0]}:${item[1]}`
  })
  .filter(function (item) {
    return item.indexOf('name') > -1
  })
// 3.freeze
const obj1 = {
    name: 'ljq'
  }
  
  Object.freeze(obj1)
  obj1.name = 'xxx'
  console.log(obj1)

// 4.keys
const keys = Object.keys(target)
console.log(keys)

// 5.values
const values = Object.values(target)
console.log(values)
