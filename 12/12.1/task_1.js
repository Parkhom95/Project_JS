// Задачей является создать функцию-генератор pseudoRandom(seed), которая получает seed и создаёт генератор с указанной формулой.

// Пример использования:

// let generator = pseudoRandom(1);

// alert(generator.next().value); // 16807
// alert(generator.next().value); // 282475249
// alert(generator.next().value); // 1622650073

function* pseudoRandom(seed) {
    const a = 16807; 
    const m = 2147483647; 
    
    let value = seed;
    
    while (true) {
        value = (value * a) % m; 
        yield value; 
    }
}

let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073