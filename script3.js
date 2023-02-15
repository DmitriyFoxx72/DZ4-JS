//                                 Урок 4. Циклы и массивы
// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число


// for (let digit = 0; digit <= 10; digit++) {
//     if (digit == 0) {
//         console.log(`${digit} - это ноль`);
//     } else if (digit % 2 == 0) {
//         console.log(`${digit} - четное число`);
//     } else {
//         console.log(`${digit} - нечетное число`);
//     }
// }

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(3,2)
// console.log(arr);




// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3




const arr = [];
let size = 5;
for (let i = 0; i < size; i++) {
    arr.push(Math.round(Math.random()*10));
}
console.log(arr);

let sum = 0;
for (let i = 0; i < size; i++) {
    sum += arr[i];
}
console.log(`сумма равна ${sum}`);

let min = arr[0];
for (let i = 0; i < size; i++) {
    if (arr[i] < min) { min = arr[i]; }
}
console.log(`минимальный число ${min}`);

for (let i = 0; i < size; i++) {
    if (arr[i] == 3){
        console.log(`есть число 3`);
    }



// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx
// for (let digit = 0; digit <= 10; digit++) {
//     if (digit == 0) {
//         console.log(`${digit} - это ноль`);
//     } else if (digit % 2 == 0) {
//         console.log(`${digit} - четное число`);
//     } else {
//         console.log(`${digit} - нечетное число`);
//     }
// }

// доп. задание

// for (let i = 0; i < 20; i++){
//     let item = "";
//     for(let j = 0; j <= i; j++){
//         item += "X";
//     }
//     console.log(item);







}