/*
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
Должно работать так:
*/

function isEmpty(obj) {
    for (let key in obj){
        isEmpty = false;
        break;
    }
    if (isEmpty) {
        return true;
    } else {
        return false;
    }
    
};


let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

isEmpty( schedule );