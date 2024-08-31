// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbers(from, to) {
    let current = from;
    
    const intervalId = setInterval(() => {
        console.log(current);
        current++;
        
        if (current > to) {
            clearInterval(intervalId);
        }
    }, 1000);
}


printNumbers(1, 5);

// ------------------------------
function printNumbers(from, to) {
    let current = from;

    function printNext() {
        console.log(current);
        current++;
        
        if (current <= to) {
            setTimeout(printNext, 1000);
        }
    }

    printNext();
}

printNumbers(1, 5);