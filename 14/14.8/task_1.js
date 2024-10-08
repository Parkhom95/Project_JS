// Используя Intl.Collator, отсортируйте массив:

// let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

// // ... ваш код ...

// alert( animals ); // АИСТ,ёж,енот,ехидна,тигр,ЯК
// В этом примере порядок сортировки не должен зависеть от регистра.

// Что касается буквы "ё", то мы следуем обычным правилам сортировки буквы ё, по которым «е» и «ё» считаются одной и той же буквой, 
// за исключением случая, когда два слова отличаются только в позиции буквы «е» / «ё» – тогда слово с «е» ставится первым.

let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

let collator = new Intl.Collator('ru', {
    sensitivity: 'base', // Игнорирует регистр
    useNative: true
});

animals.sort((a, b) => collator.compare(a.replace(/ё/g, "е"), b.replace(/ё/g, "е")));

alert(animals); // АИСТ,ёж,енот,ехидна,тигр,ЯК