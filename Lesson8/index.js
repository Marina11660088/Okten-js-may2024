// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.

// function cloner (user) {
//     if (user) {
//         let functions = [];
//         for (const key in user) {
//             if (typeof user[key]==='function'){
//                 const fnClone = user[key].bind({});
//                 functions.push({fnClone,key});
//             }
//         }
//         console.log(functions);
//
//         const userParse = JSON.parse(JSON.stringify(user));
//         for (const func of functions) {
//             userParse[func.key]=func.fnClone;
//         }
//         console.log(userParse)
//         return userParse
//     }
//     throw new Error('!!!')
// }
// cloner({id:1, name: 'Anna', greeting(){}, greeting1(){}})


// #iz6emEsP2BA
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

let maper = coursesAndDurationArray.map((course, index)=>({...course, id: index+1}));
console.log(maper)