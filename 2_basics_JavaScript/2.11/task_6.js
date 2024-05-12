/*Что выведет код ниже?*/

let value = NaN;

value &&= 10;   // не сработает, т.к. NaN = false => value = NaN
value ||= 20;   // сработает, т.к. NaN = false => value = 20
value &&= 30;   // сработате т.к value = 20 = true, то value = 30
value ||= 40;   // не сработает т.к value = 30 = true, то value = 30

alert(value); // выведет 30