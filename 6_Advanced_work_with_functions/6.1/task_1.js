// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Например:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.
// Пример работы вашей функции:

// function sumTo(n) { /*... ваш код ... */ }

// alert( sumTo(100) ); // 5050

//рекурсия
function sumTo(n){
    
    let sum = n;
    if (n == 0){
        return sum;
    }else {
        return sum += sumTo(n - 1);
};
}    
    alert(sumTo(4));

    // цикл
    function sumTo(n) {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        return sum;
    }
    
    alert(sumTo(100)); // 5050
    
    
    // формула
    function sumTo(n) {
        return (n * (n + 1)) / 2;
    }
    
    alert(sumTo(100)); // 5050