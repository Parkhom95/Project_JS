function Calculator() {
    // Храним доступные операции в объекте
    this.operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b
    };
}

// Метод для выполнения расчетов
Calculator.prototype.calculate = function(str) {
    // Разбиваем строку на части
    const [a, operator, b] = str.split(' ');
    const numA = parseFloat(a);
    const numB = parseFloat(b);


    if (this.operations[operator]) {
        return this.operations[operator](numA, numB);
    } else {
        throw new Error(`Неизвестный оператор: ${operator}`);
    }
};


Calculator.prototype.addMethod = function(name, func) {
    this.operations[name] = func;
};


let calc = new Calculator();

alert(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => Math.pow(a, b));

let result = powerCalc.calculate("2 ** 3");
alert(result); // 8