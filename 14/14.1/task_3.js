// Создайте функцию makeObservable(target), которая делает объект «наблюдаемым», возвращая прокси.

// Вот как это должно работать:

// function makeObservable(target) {
//   /* ваш код */
// }

// let user = {};
// user = makeObservable(user);

// user.observe((key, value) => {
//   alert(`SET ${key}=${value}`);
// });

// user.name = "John"; // выводит: SET name=John
// Другими словами, возвращаемый makeObservable объект аналогичен исходному, но также имеет метод observe(handler), который позволяет запускать handler при любом изменении свойств.

// При изменении любого свойства вызывается handler(key, value) с именем и значением свойства.

// P.S. В этой задаче ограничьтесь, пожалуйста, только записью свойства. Остальные операции могут быть реализованы похожим образом.

function makeObservable(target) {

  let handlers = [];


  target.observe = function(handler) {
    handlers.push(handler);
  };


  return new Proxy(target, {
    set(target, key, value) {
      target[key] = value;
      for (let handler of handlers) {
        handler(key, value);
      }
      return true;
    }
  });
}


let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  alert(`SET ${key}=${value}`);
});

user.name = "John"; 
user.age = 30; 