// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname , email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// let arr = [
//     new User(1, 'Alex', 'Volkov', 'oliv@gmail.com', 380675674433),
//     new User(5, 'Igor', 'Petrov', '123@gmail.com', 380680094433),
//     new User(10, 'Olena', 'Ivanova', 'o789v@gmail.com', 380509998877),
//     new User(4, 'Yana', 'Shevcova', 'llljjj@gmail.com', 380634556789),
//     new User(2, 'Sergiy', 'Naliev', 'po098@gmail.com', 380955674433),
//     new User(6, 'Oleg', 'Pevchiy', 'pev33@gmail.com', 380670004433),
//     new User(7, 'Maryna', 'Ivanova', 'ivan8@gmail.com', 380995674433),
//     new User(8, 'Vova', 'Maximov', 'max000@gmail.com', 380678895533),
//     new User(9, 'Tanya', 'Yusupova', 'y6565@gmail.com', 380995674422),
//     new User(3, 'Olena', 'Zayceva', '008877@gmail.com', 380675675544)
// ]
// console.log(arr)




// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filteredArr=arr.filter((User)=>User.id%2===0);
// console.log(filteredArr)



// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sortedArr = arr.sort((User1, User2)=> User1.id-User2.id)
// console.log(sortedArr)


// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone= phone;
//         this.order = order;
//     }
// }
// let arr =[
//     new Client(5, 'Igor', 'Petrov', '123@gmail.com', 380680094433, ['abricos', 'imbir', 'vishnya']),
//     new Client(10, 'Olena', 'Ivanova', 'o789v@gmail.com', 380509998877,['lemon', 'imbir', 'vishnya']),
//     new Client(1, 'Alex', 'Volkov', 'oliv@gmail.com', 380675674433, ['yabluko', 'kavun', 'imbir', 'vishnya']),
//     new Client(4, 'Yana', 'Shevcova', 'llljjj@gmail.com', 380634556789,['yabluko', 'kavun']),
//     new Client(2, 'Sergiy', 'Naliev', 'po098@gmail.com', 380955674433,['kivi', 'laim', 'kavun','imbir', 'vishnya']),
//     new Client(6, 'Oleg', 'Pevchiy', 'pev33@gmail.com', 380670004433, ['imbir', 'vishnya']),
//     new Client(7, 'Maryna', 'Ivanova', 'ivan8@gmail.com', 380995674433,['laim', 'kavun', 'imbir', 'vishnya']),
//     new Client(8, 'Vova', 'Maximov', 'max000@gmail.com', 380678895533,['kivi', 'vishnya']),
//     new Client(9, 'Tanya', 'Yusupova', 'y6565@gmail.com', 380995674422,['klubnika', 'laim', 'kavun', 'imbir', 'vishnya']),
//     new Client(3, 'Olena', 'Zayceva', '008877@gmail.com', 380675675544, ['kavun', 'imbir', 'vishnya'])
// ]
// console.log(arr)


// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let sortedArr1 = arr.sort((Client1, Client2)=> Client1.order.length-Client2.order.length)
// console.log(sortedArr1)



// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// function Car (model, producer, year, maxSpeed, engine) {
//     this.model = model;
//     this.year = year;
//     this.producer = producer;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     this.info = function () {
//         console.log(`model: ${this.model}, brand: ${this.producer}, year: ${this.year}, max speed: ${this.maxSpeed}, engine: ${this.engine}`)
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         console.log(this.maxSpeed += newSpeed);
//     };
//     this.changeYear = function (newValue) {
//         console.log(this.year = newValue)
//     }
//     this.addDriver = function (driver) {
//         console.log(this.driver = driver)
//     }
// }
// let car1 = new Car('bmw', 'bmw', 2023, 310, 3.8)
// console.log(car1)
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(20);
// car1.addDriver('Maxim')
// console.log(car1)




// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, producer, year, maxSpeed, engine) {
//         this.model = model;
//         this.year = year;
//         this.producer = producer;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//
//     drive() {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//
//     info() {
//         console.log(`model: ${this.model}, brand: ${this.producer}, year: ${this.year}, max speed: ${this.maxSpeed}, engine: ${this.engine}`)
//     };
//
//     increaseMaxSpeed(newSpeed) {
//         console.log(this.maxSpeed += newSpeed);
//     };
//
//     changeYear(newValue) {
//         console.log(this.year = newValue)
//     }
//
//     addDriver(driver) {
//         console.log(this.driver = driver)
//     }
// }
//
// let car1 = new Car('bmw', 'bmw', 2023, 310, 3.8)
// console.log(car1)
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(20);
// car1.addDriver('Maxim')
// console.log(car1)




//
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//     let cinderellas = [
//         new Cinderella('Alina', 27, 38),
//         new Cinderella('Raya', 32, 35),
//         new Cinderella('Katerina', 21, 39),
//         new Cinderella('Vera', 19, 39),
//         new Cinderella('Olga', 27, 38),
//         new Cinderella('Marina', 35, 34),
//         new Cinderella('Karina', 26, 36),
//         new Cinderella('Irina', 18, 37),
//         new Cinderella('Tanya', 22, 38),
//         new Cinderella('Yana', 39, 37),
//         ]
// console.log(cinderellas);
// class Prince {
//     constructor(name, age, shoeSize) {
//         this.name = name;
//         this.age = age;
//         this.shoeSize = shoeSize;
//     }
// }
// let prince1 = new Prince('Andrey', 28, 36);
// console.log(prince1);
//
//     for (const cinderella of cinderellas) {
//         if (prince1.shoeSize===cinderella.footSize) {
//             console.log(cinderella)
//         }
//     }
//
//  let find =cinderellas.find((item)=>item.footSize===prince1.shoeSize);
// console.log(find)
//

// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter