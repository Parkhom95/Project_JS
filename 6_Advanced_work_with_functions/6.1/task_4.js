// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
// Напишите функцию printList(list), которая выводит элементы списка по одному.

// Сделайте два варианта решения: используя цикл и через рекурсию.


// цикл
function printListWithLoop(list) {
    let currentNode = list; 
    while (currentNode) {
      console.log(currentNode.value); 
      currentNode = currentNode.next; 
    }
  }


  // рекурсия

  function printListWithRecursion(list) {
    if (list === null) return; 
    console.log(list.value); 
    printListWithRecursion(list.next); 
  }
  
  printListWithRecursion(list);