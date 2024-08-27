// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

function filterRange(arr, a, b){
    return arr.filter(item => (a <= item && item <= b) );
}
let arr =[5,3,8,1];
let filtered = filterRange(arr, 1,4);

alert(filtered);
