/* Здесь функция makeUser возвращает объект.

Каким будет результат при обращении к свойству объекта ref? Почему? */

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Каким будет результат?

/* Error: Cannot read property 'name' of undefined,
 * т.к. this вызывается как функция а не через точечный синтаксис
*/
