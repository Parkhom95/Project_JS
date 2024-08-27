


function getAverageAge(users) {
    // Проверяем, есть ли в массиве пользователи
    if (users.length === 0) {
        return 0; // Если массив пустой, возвращаем 0
    }
    
    // Суммируем все возраста
    const totalAge = users.reduce((sum, user) => sum + user.age, 0);
    
    // Вычисляем средний возраст
    return totalAge / users.length;
}

// Пример использования:
const users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Chris', age: 22 }
];

const averageAge = getAverageAge(users);
console.log(averageAge); // Выведет 25 (средний возраст)