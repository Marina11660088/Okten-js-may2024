// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.



// fetch('https://dummyjson.com/carts')
//     .then(res => res.json())
//     .then(value=>{
//         let {carts} =value;
//         console.log(carts);
//
//
//         for (const cart of carts) {
//             let box = document.createElement('div');
//             document.body.appendChild(box);
//
//             for (const cartElement of cart.products) {
//                 let h3 =document.createElement('h3');
//                 let img =document.createElement('img');
//                 h3.innerText = cartElement.title;
//                 img.src = cartElement.thumbnail;
//                 let p1 =document.createElement('p');
//                 p1.innerText = `price: ${cartElement.price}`;
//                 let span1 =document.createElement('span');
//                 span1.innerText = `discountPercentage:${cartElement.discountPercentage
//                 };`;
//                 let span2 =document.createElement('span');
//                 span2.innerText = `  discountedPrice:${cartElement.discountedTotal
//                 };`;
//                 let span3 =document.createElement('span');
//                 span3.innerText = `  quantity:${cartElement.quantity};`;
//                 let p2 =document.createElement('p');
//                 p2.innerText = `  total:${cartElement.total};`;
//                 box.append(h3,img, p1, span1, span2, span3,p2)
//             }
//
//         }
//     });


// #whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.



// fetch('https://dummyjson.com/recipes')
//     .then(res => res.json())
//     .then(value=>{
//         let {recipes} =value;
//         console.log(recipes);
//
//
//         for (const recipe of recipes) {
//             let box = document.createElement('div');
//             document.body.appendChild(box);
//
//                 let h3 =document.createElement('h3');
//                 let img =document.createElement('img');
//                 h3.innerText = recipe.name;
//                 img.src = recipe.image;
//                 let p1 =document.createElement('p');
//                 p1.innerText = `prepTimeMinutes: ${recipe.prepTimeMinutes}`;
//                 let span1 =document.createElement('span');
//                 span1.innerText = `cookTimeMinutes: ${recipe.cookTimeMinutes
//                 };`;
//                 let span2 =document.createElement('span');
//                 span2.innerText = `  cuisine: ${recipe.cuisine
//                 };`;
//                 let span3 =document.createElement('span');
//                 span3.innerText = `  caloriesPerServing: ${recipe.caloriesPerServing};`;
//                 let p2 =document.createElement('p');
//                 p2.innerText = `rating:${recipe.rating};`;
//                 box.append(h3,img, p1, span1, span2, span3,p2)
//
//                 let ul =document.createElement('ul');
//                 ul.innerText='INGREDIENTS:'
//                 box.appendChild(ul)
//                 for (const element of recipe.ingredients) {
//                     console.log(element)
//                     let li =document.createElement('li');
//                     li.innerText=element;
//                     ul.appendChild(li);
//                 }
//         }
//     });