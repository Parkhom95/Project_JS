/*
Преобразуйте объект в JSON, а затем обратно в обычный объект
важность: 5
Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
};
*/

let user = {
    name: "Василий Иванович",
    age: 35
  };
let jsonUser = JSON.stringify(user);
alert(jsonUser);
let valueUser = JSON.parse(jsonUser);
alert(valueUser.age);