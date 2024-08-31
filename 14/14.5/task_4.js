// Почему результат второго alert такой странный?

// alert( 123456789 ^ 0 ); // 123456789
// alert( 12345678912345 ^ 0 ); // 1942903641

1)Здесь выполняется операция побитового исключающего ИЛИ (XOR) между `123456789` и `0`. Поскольку `0` не влияет на число, результатом операции будет `123456789`.
2)В этом случае `12345678912345` — это число, которое выходит за пределы безопасного целого числа, аким образом, при вычислении `12345678912345 ^ 0` результат получается `1942903641`