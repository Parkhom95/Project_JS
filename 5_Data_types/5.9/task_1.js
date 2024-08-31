
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.

function sumSalaries(salaries) {
    let total = 0;
    const values = Object.values(salaries);
    
    for (let salary of values) {
        total += salary;
    }
    
    return total; 
}


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert(sumSalaries(salaries)); // 650