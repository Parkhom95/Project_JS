// сть массив сообщений такой же, как и в предыдущем задании.

// let messages = [
//   { text: "Hello", from: "John" },
//   { text: "How goes?", from: "John" },
//   { text: "See you soon", from: "Alice" }
// ];
// Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для хранения информации о том, когда сообщение было прочитано?

// В предыдущем задании нам нужно было сохранить только факт прочтения «да или нет». Теперь же нам нужно сохранить дату, и она должна исчезнуть из памяти при удалении «сборщиком мусора» сообщения.

let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
  ];
  
  let readDates = new WeakMap();
  
 
  function markAsRead(message) {
    readDates.set(message, new Date());
  }
  
    function getReadDate(message) {
    return readDates.get(message);
  }
  
  markAsRead(messages[0]);
  
  console.log(getReadDate(messages[0])); // Выведет дату, когда сообщение было прочитано
  console.log(getReadDate(messages[1])); // undefined

  messages = null; 