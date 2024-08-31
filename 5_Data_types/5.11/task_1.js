// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».


function getWeekDay(date) {
    const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    const dayIndex = date.getDay();
    return days[dayIndex];
}


let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert(getWeekDay(date));