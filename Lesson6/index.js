// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let word1 = 'hello world';
// console.log(word1.length);
// let word2 = 'lorem ipsum';
// console.log(word2.length);
// let word3 = 'javascript is cool';
// console.log(word3.length)


// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let word1 = 'hello world';
// console.log(word1.toUpperCase());
// let word2 = 'lorem ipsum';
// console.log(word2.toUpperCase());
// let word3 = 'javascript is cool';
// console.log(word3.toUpperCase())



// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let word1 = 'HELLO WORLD';
// console.log(word1.toLowerCase());
// let word2 = 'LOREM IPSUM';
// console.log(word2.toLowerCase());
// let word3 = 'JAVASCRIPT IS COOL';
// console.log(word3.toLowerCase())



// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// console.log(str.trim())


//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// function stringToarray (str) {
//     let split=str.split(' ');
//     return split
// }
// console.log(stringToarray(str))




// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10,8,-7,55,987,-1011,0,1050,0];
// let stringArr =arr.map(item => item.toString())
// console.log(stringArr)


// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
// let sortAscending=nums.sort((n1,n2) => {
//     return n1-n2;
// });
// console.log(sortAscending)
//
// let sortDescending=nums.sort((n1,n2) => {
//     return n2-n1;
// });
// console.log(sortDescending)



// ==========================
// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// let sortArray=coursesAndDurationArray.sort((n1,n2) => {
//     return n2.monthDuration-n1.monthDuration;
//  });
//  console.log(sortArray);
//
// let filterArray=coursesAndDurationArray.filter((value) => {
//     return value.monthDuration>5;
// });
// console.log(filterArray)
//
// let mapArray=coursesAndDurationArray.map((value, index) => {
//     let newArr = {
//         id: index+1,
//         title: value.title,
//         monthDuration: value.monthDuration
//     }
//     return newArr;
// });
// console.log(mapArray);




// =========================
//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }



// let cardSuit= ['spade', 'diamond','heart', 'clubs'];
// let value= [6, 7, 8, 9, 10, 'ace','jack','queen','king'];
// let color= {
//     spade: 'black',
//     diamond: 'red',
//     heart: 'red',
//     clubs: 'black'
// };
// function cardDeck(){
//
//   let cards = []
// for (const nameCard of cardSuit) {
//     for (const valueElement of value) {
//         cards.push({
//             cardSuit: nameCard,
//             value: valueElement,
//             color: color[nameCard]
//         })
//     }
// }
//     return cards
// }
//
// let cards = cardDeck()
// console.log(cards)
//
// let filterSpadeAce=cards.filter((card) => {
//     return card.cardSuit==='spade' & card.value==='ace';
// });
// console.log(filterSpadeAce)
//
// let filterSixes=cards.filter((card) => {
//     return  card.value===6;
// });
// console.log(filterSixes)
//
// let filterReds=cards.filter((card) => {
//     return  card.color==='red';
// });
// console.log(filterReds)
//
// let filterDiamond=cards.filter((card) => {
//     return  card.cardSuit==='diamond';
// });
// console.log(filterDiamond)
//
// let filterClubs1=cards.filter((card) => {
//     return  card.cardSuit==='clubs' & card.value>8;
// });
// console.log(filterClubs1)
// let filterClubs2 = cards.filter((card)=> card.cardSuit==='clubs' && typeof card.value ==="string");
//  console.log (filterClubs2)
// let filterClubs= filterClubs1.concat(filterClubs2);
//  console.log (filterClubs)





// =========================
//
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// let reduceCards = cards.reduce((accumulator, card)=>{
//    if (card.cardSuit==='spade'){
//        accumulator.spades.push(card);
//    } else if (card.cardSuit==='diamond'){
//        accumulator.diamonds.push(card);
//    } else if (card.cardSuit==='heart'){
//        accumulator.hearts.push(card);
//    } else{
//        accumulator.clubs.push(card);
//    }
//    return accumulator;
// },{spades:[],diamonds:[], hearts:[], clubs:[]});
// console.log(reduceCards)



// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker


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
// let filterCoursesSass = coursesArray.filter(function (course) {
//     return course.modules.includes('sass')
// });
// console.log(filterCoursesSass);
//
// let filterCoursesDocker = coursesArray.filter(function (course) {
//     return course.modules.includes('docker')
// });
// console.log(filterCoursesDocker);
