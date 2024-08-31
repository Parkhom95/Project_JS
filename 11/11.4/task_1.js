// // Что вы думаете? Выполнится ли .catch? Поясните свой ответ.

// // new Promise(function(resolve, reject) {
// //   setTimeout(() => {
// //     throw new Error("Whoops!");
// //   }, 1000);
// // }).catch(alert);

// .catch не выполнится, потому что ошибка, выбрасываемая внутри функции setTimeout, не попадает в контекст промиса.

new Promise(function(resolve, reject) {
    setTimeout(() => {
      reject(new Error("Whoops!")); 
    }, 1000);
  }).catch(alert);

//   выполниться так как вызвали reject