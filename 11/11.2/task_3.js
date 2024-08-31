// Перепишите функцию showCircle, написанную в задании Анимация круга с помощью колбэка таким образом, чтобы она возвращала промис, вместо того чтобы принимать в аргументы функцию-callback.

// Новое использование:

// showCircle(150, 150, 100).then(div => {
//   div.classList.add('message-ball');
//   div.append("Hello, world!");
// });
// Возьмите решение из Анимация круга с помощью колбэка в качестве основы.

function showCircle(x, y, radius) {
    return new Promise((resolve) => {
      // Создаем элемент div
      const div = document.createElement('div');
      
      div.style.width = div.style.height = `${radius * 2}px`;
      div.style.borderRadius = '50%';
      div.style.position = 'absolute';
      div.style.left = `${x - radius}px`;
      div.style.top = `${y - radius}px`;
      div.style.backgroundColor = 'red';
      div.style.opacity = 0;
  
      document.body.appendChild(div);
  
      // Анимация плавного появления круга
      let opacity = 0;
      
      const animate = () => {
        opacity += 0.02; // Увеличиваем непрозрачность
        div.style.opacity = opacity;
        
        if (opacity < 1) {
          requestAnimationFrame(animate); // Запрашиваем следующую кадр анимации
        } else {
          resolve(div); // Разрешаем промис и возвращаем созданный элемент
        }
      };
  
      animate(); // Запускаем анимацию
    });
  }
  
  // Использование
  showCircle(150, 150, 100).then(div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
  });