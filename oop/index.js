// const person = {
//     age: 20,
//     name: 'John'
// }

// function sayHello(person) {
//     console.log(person.name + 'Hello');
// }

function superType() {
    this.property = '父亲'
    this.arr = [1, 2, 3]
}

superType.prototype.getSuperValue = function () {
    return this.arr;
}

function childType() {
    this.childProperty = '儿子';
}

childType.prototype = new superType();


// const instance = new childType();
// console.log(instance.getSuperValue());
// instance.setArr(4);

