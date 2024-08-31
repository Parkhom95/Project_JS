// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

function unique(arr){
    let uniqueItems = [];

    for(let i=0; i < arr.length; i++) {
        uniqueItems[arr[i]] = true;
    }
    return Object.keys(uniqueItems);
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) );
