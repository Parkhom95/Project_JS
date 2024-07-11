
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

function ucFirst(str){
    alert(str[0].toUpperCase() + str.slice(1));
}
ucFirst("вася");