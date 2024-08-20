//Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій


// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let calc =(a, b) => a*b
// console.log(calc(20, 40))



// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let calc = (p, r) => p*r*r
// console.log(calc(3.14, 5))



// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let calc=(p, r,h) => p*r*r*h
//  console.log(calc(3.14, 5, 10))



// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = [1,2,3,4,5,6,7];
// let arr=(array) => {
//     for (const arrayElement of array) {
//         console.log(arrayElement)
//     }
// }
// arr(array)



// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

// let paragraph =(arg)=>{
//     document.write(`<p>${arg}</p>`)
// }
// paragraph('hello')


// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

// let list = (arg)=>{
//     document.write(`
// <ul>
// <li>${arg}</li>
// <li>${arg}</li>
// <li>${arg}</li>
// </ul>
// `)
// }
// list('hello')



// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

// let list = (arg, num) => {
//
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${arg}</li>`)
//     }
//     document.write(`</ul>`)
//
// }
// list('hello', 5)



// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write


// let array = [1, 'one', true, 66, 55];
// let list = (array)=>{
//
//     document.write(`<ul>`)
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
//     document.write(`</ul>`)
//
// }
// list(array)



// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let array = [
//             {id:1, name: 'max', age: 30},
//             {id:2, name: 'anya', age: 31},
//             {id:3, name: 'oleg', age: 28},
//             {id:4, name: 'andrey', age: 29}
// ];
// let arr = (array) => {
//     for (const arrayElement of array) {
//         document.write(`<div>id - ${arrayElement.id}, name - ${arrayElement.name}, age - ${arrayElement.age}</div>`)
//     }
// }
// arr(array)



//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
//

//  let arr = [6,90,5,876,18];
// let minFn=(arr)=>{
//     let min = arr[0];
//     for (const item of arr) {
//         if (item<min){
//             min=item;
//         }
//     }
//      console.log ('min', min)
//     return min
// }
// minFn (arr);



// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// let arr = [6,90,6,876,18];
// let sum=(arr)=>{
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum+=arr[i]
//     }
//      console.log ('sum', sum)
//     return sum
// }
// sum (arr);





// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let swap =(arr, a, b)=> {
//     let freeBox = arr[a];
//     arr[a]=arr[b];
//     arr[b]=freeBox;
//
//     return arr;
//
// }
// console.log (swap ([6,90,7,876,18], 0, 1))




// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

// let exchange =(sumUAH,currencyValues,exchangeCurrency)=> {
//     if (exchangeCurrency==='USD'){
//         console.log(sumUAH/currencyValues[0].value)
//     }
//     else if (exchangeCurrency==='EUR'){
//         console.log(sumUAH/currencyValues[1].value)
//     }
// }
// exchange (10000,[{currency:'USD',value:25},{currency:'EUR',value:30}],'EUR')