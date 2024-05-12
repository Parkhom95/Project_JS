/*Что будет выведено в итоге?*/

let city = null;

city ??= "Берлин";
city ??= null;
city ??= "Кёльн";
city ??= "Гамбург";

alert(city); // выведет Берлин т.к. city = null, то city == "Берлин"