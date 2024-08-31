
// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.

// P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так.


function makeCounter() {
    let count = 0; // Скрытая переменная для хранения текущего значения

    function counter() {
        return count++; // Возвращает текущее значение и затем увеличивает его
    }

    counter.set = function(value) {
        count = value; // Устанавливает счётчику значение value
    };

    counter.decrease = function() {
        count--; // Уменьшает значение счётчика на 1
    };

    return counter;
}

// Пример использования
const counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(10);
console.log(counter()); // 10

counter.decrease();
console.log(counter()); // 