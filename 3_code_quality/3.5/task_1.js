/*Что не так в нижеприведённом тесте функции pow? */

it("Возводит x в степень n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

/* Лучше использовать несколько блоков it,
 * т.к. если в каком то из условий будет ошибка, 
 * мы не поймем где именно*/