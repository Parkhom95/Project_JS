// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.

// Но это не выходит:

// map.keys возращает объект а не массив, можно конвектировать в массив с помощью Array.from или оператора расширения [...]

let map = new Map();

map.set("name", "John");

let keys = [...map.keys()];

keys.push("more");