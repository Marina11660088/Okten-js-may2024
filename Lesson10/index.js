// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

// let text=document.createElement('h1');
// text.id='text';
// text.innerText = 'Hello';
// console.log(text);
// let btn = document.createElement('button');
// btn.innerText='close';
//
// btn.onclick = () => text.style.display='none';
//
// console.log(btn);
// document.body.append(text, btn)



//         #j693c a8
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let input1 = document.getElementById('inp1');
// let btn1 = document.getElementsByClassName('btnSend')[0];
// btn1.onclick= function() {
//        if (input1.value<18){
//        let p1 =document.createElement('p');
//        p1.innerText = 'Увага! Ще немає 18';
//        document.body.appendChild(p1);
//        } else {
//         let p2 =document.createElement('p');
//         p2.innerText = 'Вітаю';
//         document.body.appendChild(p2);
//        }
// }



// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом


// function submitForm() {
//
//     let name = document.getElementById("name").value;
//
//     let surname = document.getElementById("surname").value;
//     let age = document.getElementById("age").value;
//
//     let user = {name: name, surname: surname, age: age};
//
//     let boxDiv = document.getElementById("box");
//     boxDiv.innerHTML = JSON.stringify(user);
// }
// submitForm()





// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

// let firstNumber=+localStorage.getItem('number');
// firstNumber+=1;
// localStorage.setItem('number', firstNumber)
// document.getElementById('numb').innerText=firstNumber;



// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

// let sessionsList;
// if (localStorage.getItem('sessionsList')){
// sessionsList=JSON.parse(localStorage.getItem('sessionsList'));
// } else {
//     sessionsList=[];
// }
// sessionsList.push(new Date());
// localStorage.setItem('sessionsList', JSON.stringify(sessionsList));






// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

// const inpKg =document.getElementById('inpKg');
// const divRes = document.getElementById('divRes')
// inpKg.oninput=function () {
//     const kg = +this.value;
//     let result=kg*2.2;
//     divRes.innerText=result;
// }



// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

// function addToLocalStorage(arrayName,objToAdd) {
//     const item = localStorage.getItem(arrayName);
//     if (!item){
//         throw new Error('there is no such array');
//     }
//
//     const array =JSON.parse(item);
//     if (typeof objToAdd==='object'){
//         array.push(objToAdd);
//     }
//     const jsonArray = JSON.stringify(array);
//     localStorage.setItem(arrayName, jsonArray)
// }
// addToLocalStorage('sessionsList', {})



//     #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

// let table =document.getElementById('table');
// let tableForm = document.forms['tableForm'];
//
// tableForm.onsubmit= function (ev) {
//     table.innerText='';
//     ev.preventDefault();
//     const linesVal = +tableForm.lines.value;
//     const cellsVal = +tableForm.cells.value;
//     const infoVal = tableForm.info.value;
//     console.log(linesVal, cellsVal, infoVal)
//
//     for (let i = 0; i < linesVal; i++) {
//         const tr = document.createElement('tr');
//
//         for (let j = 0; j < cellsVal; j++) {
//             const td= document.createElement('td');
//             td.innerText=infoVal;
//             tr.appendChild(td);
//         }
//
//         table.appendChild(tr)
//     }
// }



//     #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
//
//
// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів


