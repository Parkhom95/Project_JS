// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

// Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

// Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.


function fib(n) {
    if (n < 1) {
        return "Input should be a positive integer.";
    }

    const fibSequence = [1, 1]; 

    for (let i = 2; i < n; i++) {
        fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
    }

    return fibSequence[n - 1]; 
}

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757