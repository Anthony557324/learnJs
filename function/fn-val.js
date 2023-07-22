const fn = function () {
  console.log("test");
  const result = function () {
    console.log("hello");
    return 1;
  };
  return result();
};

const obj = {
  fn, // fn: fn key和value都为fn1
};

const fromObjMethod = obj.fn;
console.log(fromObjMethod());

// 当对象的value是一个变量名，并且这个变量名和对象的key相同，可以直接简写成一个
// 当对象的key和定义的函数名相同时，可以直接省略函数关键词和key，直接定义函数名+函数体

const obj1 = {
  sing() {
    // sing:function sing()
    console.log("唱歌");
  },
};

obj.sing()