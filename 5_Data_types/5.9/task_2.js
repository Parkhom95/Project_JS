// Напишите функцию count(obj), которая возвращает количество свойств объекта:

// let user = {
//   name: 'John',
//   age: 30
// };

// alert( count(user) ); // 2
// Постарайтесь сделать код как можно короче.

function count(obj){
    return Object.keys(obj).length;
}

let user = {
    name: 'John',
    age: 30
  };
  
  alert(count(user)); // 2