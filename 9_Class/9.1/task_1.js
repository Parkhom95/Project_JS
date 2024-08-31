// Класс Clock написан в функциональном стиле. Перепишите его, используя современный синтаксис классов.

// P.S. Часики тикают в консоли. Откройте её, чтобы посмотреть.

class Clock {
    constructor({ template }) {
      this.template = template;
      this.timer = null;
    }
  
    render() {
      const date = new Date();
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
  
      const output = this.template
        .replace('h', hours)
        .replace('m', minutes)
        .replace('s', seconds);
  
      console.log(output);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  }

  const clock = new Clock({ template: 'h:m:s' });
  clock.start();