// Создайте класс FormatError, который наследует от встроенного класса SyntaxError.

// Класс должен поддерживать свойства message, name и stack.

// Пример использования:

// let err = new FormatError("ошибка форматирования");

// alert( err.message ); // ошибка форматирования
// alert( err.name ); // FormatError
// alert( err.stack ); // stack

// alert( err instanceof FormatError ); // true
// alert( err instanceof SyntaxError ); // true (потому что наследует от SyntaxError)

class FormatError extends SyntaxError {
    constructor(message) {
        super(message); // вызываем конструктор SyntaxError
        this.name = this.constructor.name; // устанавливаем имя ошибки
        this.stack = (new Error()).stack; // получаем стек вызовов
    }
}


let err = new FormatError("ошибка форматирования");

alert(err.message); 
alert(err.name); 
alert(err.stack); 

alert(err instanceof FormatError); // true
alert(err instanceof SyntaxError); // true