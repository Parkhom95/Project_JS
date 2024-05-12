/*Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.

*/
let calculator = {
  read(){
    this.a = +prompt("Введите a:");
    this.b = +prompt("Введите b:");
  },
  sum(){
    return(this.a + this.b);
  },
  mul(){
    return(this.a * this.b);
  }

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );