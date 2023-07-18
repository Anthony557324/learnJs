//创建，属性读取，属性修改，属性删除
// 1.对象类型时引用类型
// 2.创建对象
var obj = { name: 'zhangsan', age: 18 } //简单对象
//key: value或者'key':value     'name': 'zhangsan'
console.log(obj)
// 增加属性
obj.value = false

// 读取属性
console.log(obj.value)
// console.log(obj.name.name)  //undefined

//设置属性
obj.name = 'lisi'
console.log(obj);

//删除属性
delete obj.name
console.log(obj)

// 读取属性2
console.log(obj['age'])
// 设置属性2（属性为变量时只能用此方法）
obj['age'] = 20
// console.log(obj)
var str = 'desc'
obj[str] = 'this is desc'
console.log(obj)

// symbol 对象
var unique = Symbol('key')
obj[unique] = 'this is symbol'
console.log(obj)
// 取值
console.log(obj[unique])
// 私有属性
// 如果不给unique变量，这个属性谁也无法获取

// 面向对象编程，封装（数据，方法）
// golang没有class，只有struct
// 函数式编程
