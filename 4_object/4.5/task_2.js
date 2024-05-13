/*
Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/



function Calculator() {
    return{
        read() {
            this.a = +prompt("Введите а:", 0);
            this.b = +prompt("Введите b:", 0);
        },

        sum() {
            return this.a + this.b; 
        },

        mul() {
            return this.a * this.b;
        }
    }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );