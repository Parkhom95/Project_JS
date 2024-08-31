// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.


function getSecondsToday() {
    const now = new Date(); 
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()); 
    const secondsSinceStart = Math.floor((now - startOfDay) / 1000); 
    return secondsSinceStart;
}
alert(getSecondsToday());