// Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых пар ключ/значение.

// Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой. Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.

// Вот так это должно работать:

// let dictionary = Object.create(null);

// // ваш код, который добавляет метод dictionary.toString

// // добавляем немного данных
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// // только apple и __proto__ выведены в цикле
// for(let key in dictionary) {
//   alert(key); // "apple", затем "__proto__"
// }

// // ваш метод toString в действии
// alert(dictionary); // "apple,__proto__"

let dictionary = Object.create(null);

// Добавляем метод toString
dictionary.toString = function() {
    return Object.keys(this).join(',');
};

// Добавляем немного данных
dictionary.apple = "Apple";
dictionary.proto = "test"; // здесь proto -- это обычный ключ

// Только apple и proto выведены в цикле
for(let key in dictionary) {
    alert(key); // "apple", затем "proto"
}

// Ваш метод toString в действии
alert(dictionary); // "apple,proto"