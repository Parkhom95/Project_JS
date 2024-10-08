// Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, 
// но хотелось бы создать ещё один объект такого же типа.

// Можем ли мы сделать так?

// let obj2 = new obj.constructor();
// Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает.
//  И пример функции-конструктора, с которой такой код поведёт себя неправильно.

// Функция-конструктор
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Создаем объект
let obj = new Person("Alice", 30);

// Создаем новый объект на основе конструктора obj
let obj2 = new obj.constructor("Bob", 25);

console.log(obj2.name); // Bob
console.log(obj2.age);  // 25