// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.


// рекурсия
function printReverse(list) {
    if (list === null) {
      return;
    }
    printReverse(list.next); // Рекурсивно вызываем функцию для следующего узла
    console.log(list.value);  // Выводим текущее значение после того, как пришли к концу списка
  }
  
  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  printReverse(list);


function printReverse(list) {
    const stack = [];
    
    // Заполняем стек значениями из списка
    while (list !== null) {
      stack.push(list.value);
      list = list.next;
    }
    
    // Выводим значения из стека
    while (stack.length > 0) {
      console.log(stack.pop());
    }
  }
  
  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  printReverse(list);