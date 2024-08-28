// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let box = document.createElement('div');
//
//     box.classList.add('wrap');
//     box.classList.add('collapse');
//     box.classList.add('alpha');
//     box.classList.add('beta');
//     box.innerText='Hello';
//     box.style.background='silver';
//     box.style.color='red';
//     box.style.fontSize='20px';
//     document.body.appendChild(box)
//
// let boxClone = box.cloneNode(true);
//     document.body.appendChild(boxClone)



//     #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

// let arr= ['Main','Products','About us','Contacts']
// let ul =document.createElement('ul');
// document.body.appendChild(ul)
// for (const item of arr) {
//     let li=document.createElement('li');
//     li.innerText=item;
//     ul.appendChild(li)
// }
// console.log(ul)



// #jeBqHV525U5
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.


// for (const item of coursesAndDurationArray) {
//     let div=document.createElement('div');
//     div.classList.add('box');
//     document.body.appendChild(div);
//     let title=document.createElement('h2')
//     title.innerText=item.title;
//     let text =document.createElement('p')
//     text.innerText=`month duration: ${item.monthDuration}`;
//    div.append(title, text)
// }
// console.log(coursesAndDurationArray)



// =========================
//     #Kx1xgoKy8
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// //
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
// //
// for (const item of coursesAndDurationArray) {
//     let div=document.createElement('div');
//     div.classList.add('item');
//     document.body.appendChild(div);
//     let title=document.createElement('h1')
//     title.innerText=item.title;
//     title.classList.add('heading');
//     let text =document.createElement('p')
//     text.classList.add('description');
//     text.innerText=`month duration: ${item.monthDuration}`;
//    div.append(title, text)
// }


// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
//
// for (const item of coursesArray) {
//     let block = document.createElement('div');
//     block.classList.add('block');
//     document.body.appendChild(block)
//
//     let title = document.createElement('div');
//     title.classList.add('title');
//     title.innerText=item.title;
//
//     let duration = document.createElement('div');
//     duration.classList.add('duration');
//
//
//     let monthDuration =document.createElement('div')
//     monthDuration.classList.add('monthDuration');
//     monthDuration.innerText=`monthDuration: ${item.monthDuration}`;
//
//     let hourDuration =document.createElement('div')
//     hourDuration.classList.add('hourDuration');
//     hourDuration.innerText=`hourDuration: ${item.hourDuration}`;
//
//     duration.append(monthDuration, hourDuration);
//
//     let modules = document.createElement('div');
//     modules.classList.add('modules');
//     let ulModules = document.createElement('ul');
//     ulModules.classList.add('ulModules');
//     ulModules.innerHTML= '<h4>modules:</h4>';
//     modules.append(ulModules);
//
//
//          for (const module of item.modules) {
//              let liModules =document.createElement('li')
//              liModules.innerText=module;
//              liModules.classList.add('liModules');
//              ulModules.appendChild(liModules);
//
//          }
//     block.append(title, duration, modules);
// }



