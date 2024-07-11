
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

function checkSpam(str) {
    let strLow = str.toLowerCase();
    if(strLow.includes("viagra") || strLow.includes("xxx")){
       alert(true);
    }else{
        alert(false);
}}
    checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam("innocent rabbit");