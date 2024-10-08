// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

// Например, должно работать так:

// function f(a, b) {
//   alert( a + b );
// }

// f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
// Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.

Function.prototype.defer = function(ms) {

    const originalFunction = this;


    return function(...args) {
    
        setTimeout(() => {
            originalFunction.apply(this, args);
        }, ms);
    };
};


function f(a, b) {
    alert(a + b);
}

f.defer(1000)(1, 2); 