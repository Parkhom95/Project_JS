// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

// Да, именно таким образом, используя двойные круглые скобки (не опечатка).

// Например:

// sum(1)(2) = 3
// sum(5)(-1) = 4

function sum(a) {
    return function(b) {
        return a + b;
    };
}
console.log(sum(1)(2));   // 3
console.log(sum(5)(-1));  // 4
console.log(sum(10)(15)); // 25