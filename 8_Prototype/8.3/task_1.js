// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

// После этого должен работать такой код:

// function f() {
//   alert("Hello!");
// }

// f.defer(1000); // выведет "Hello!" через 1 секунду

Function.prototype.defer = function(ms) {

    const func = this;
    
    return function(...args) {

        setTimeout(() => func.apply(this, args), ms);
    };
};

// Пример использования
function f() {
    alert("Hello!");
}

f.defer(1000)(); // выведет "Hello!" через 1 секунду
