/*
Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

Пример вызовов:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/
function calcMinNumber(a, b){
    if (a < b){
        alert(a);
    }else{
        alert(b);
    }
}
let a = prompt("Введите a: ");
    b = prompt("Введите b: ");

calcMinNumber(a, b);