" use strict";

// // a = 10; при использовании "use strict" невозможно объяление переменной без синтаксиса let или const;
// console.log(1);
// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);
// // leftBorderWidth = 10; const константу нельзя изменять

// const obj = {
//     a: 50
// };

// obj.a = 10;
// console.log(obj);

// // {
// //     let result = 50; // невозможно использование переменной вне скобок 
// // }

// // console.log(result); // при использовании var будет доступ к переменной;
// let numberNew = 4.6; // номерное значение
// console.log(-4 / 0); //номер бесконечности Infitity;
// console.log("word" * 0); // NaN; Not a Number значение;
// const persone = "Alex"; // строчное значение;
// const bool = true; // true или false значение булеан;
// // console.log(something); //null значение; когда есть переменная у которой нет никакого значения;
// let und;
// console.log(und); //undefined значение у данной переменной без значения внутри;


// //Объекты
// const obj1 = {
//     name: "John",
//     age: 25,
//     isMarried: false,
// };
// console.log(obj1.name); //в данном случае obj1 это объект, а name age и isMarried это свойства объекта;
// // чтобы добраться до одного из свойств объекта нужно писать сам объект после ставить точку и его свойство;
// //console.log(obj1["name"]); аналогия проставления точки; 



// //Массивы

// let arr = ["plum.png", "orange.jpg", 6, "apple.bmp", {},
//     []
// ];
// console.log(arr[0]);

// // alert("Hello!");
// // const result = confirm("Are you here ? "); confirm задать вопрос при помощи булева значения пользователю;
// // console.log(result); 

// // const answer = prompt("Вам есть 18 ?", ""); //задать вопрос пользователю. Предоставив пользователю возможность
// // // ввести значение
// // console.log(typeof (answer)); // чтобы  вывести тип данных в консоль пишем typeof;

// //любое полученное значение от пользователю будет иметь тип данных "строчный" или "string";
// //чтобы преобразовать тип данных string в number числовой надо проставить оператор "+";
// //пример const answer = +prompt("Вам есть 18?", "");
// const answers = [];
// // answers[0] = prompt("Как ваше имя ?", "");
// // answers[1] = prompt("Как ваше  фамилие ?", "");
// // answers[2] = prompt("сколько Вам лет ?", "");
// // document.write(answers); // простой вывод текста на браузере;
// console.log(typeof (answers));

// const category = "toys";
// // console.log("https://someurl.com/" + category);
// console.log(`https:someurl.com/${category}/5`); // прием работает с косыми ковычками (БЭКТИКИ);

// const user = "jamal";
// alert(`Привет, ${user}`);

// let incr = 10,
//     decr = 10; // через запятую можно проставить переменные; окончание кода это точка с запятой;
// // incr++; //постфиксный инкремент (прибавление единицы в следующем использовании переменной);
// // decr--; //постфиксный декремент (уменьшение на единицу в следующем использовании переменной);
// // console.log(incr);
// // console.log(decr);

// console.log(++incr); // префиксный инкремент( прибавление единицы сразу же)
// console.log(++decr); // префиксный декремент (уменьшение значение переменной сразу же);
// // console.log(5 % 5); // изучить как работает знак;
// console.log(2 * 4 == 8); //true; знак сравнивания это ==;
// // строгое равенство это ===, чтобы равна была значению переменной число равно числу;
// //&& оператор И
// || оператор или;

// const isChecked = true,
//     isClose = true;

// console.log(isChecked && isClose);

// const isChecked = true,
//     isClose = false;
// // // console.log(isChecked || isClose);

// // const isChecked = false,
// //     isClose = false;
// // console.log(isChecked || !isClose); // оператор ! (меняет значение не противоположное);


// // console.log(2 + 2 * 2 !== "6");

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", ""); //1;
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,

// }; //2
// const a = prompt("Один из последних просмотренных фильмов?", ""),
//     b = prompt("На сколько оцените его?", ""),
//     c = prompt("Один из последних просмотренных фильмов?", ""),
//     d = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// // console.log(personalMovieDB);
// if (4 == 4) {
//     console.log("ok!");
// } else {
//     console.log("Error!"); //условия if ;
// }


//Первый вариант кода условий if 
// if (num < 49) {
//     console.log("Error!");
// } else if (num > 100) {
//     console.log("Много!");
// } else {
//     console.log("OK!");
// }

// // Второй вариант кода условий
// (num === 50) ? console.log("Ok!"): console.log("Error!");

// const num = 50;

// switch (num) {
//     case 49:
//         console.log("Неверно!");
//         break;
//     case 100:
//         console.log("Неверно!");
//         break;
//     case 50:
//         console.log(" В точку!");
//         break;
//     default:
//         console.log("Не в это раз! ");
// }
//ЦИКЛЫ 14 УРОК

// let num = 50;
// // while (num <= 55) {
// //     console.log(num);
// //     num++;
// // }

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

// for (i = 1; i <= 8; i++) {
// //     console.log(i);
// // }
// let num = 50;

// for (i = 1; i < 8; i++) {
//     console.log(num);
//     num++
// // }

// for (i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;// прервать
//         continue; //продолжить циклы
//     }
//     console.log(i);
// // };
// //УРОК 15
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//         b = prompt("На сколько оцените его?", "");

//         if(a != null && b != null && a != "" && b != "" &&  a.length < 50 && b.length < 50){
//         personalMovieDB.movies[a] = b;
//         console.log("DONE! ");
//         } else {
//             console.log("ERROR");
//             i--; 
//         }
// } 
// if(personalMovieDB.count < 10){
//     console.log("Просмотрено мало фильмов");
// } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
//     console.log("Среднее количество фильмов!");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("ОШИБКА");
// }
// console.log(personalMovieDB); 

// let num = 20;
// function showFirstMessage(text){
//     console.log(text);
//     num = 10;
// }
// showFirstMessage("Hello World!");
// console.log(num);

// function calc (a,b){
//     return(a + b);
// }
// // console.log(calc(10, 15));
// // console.log(calc(20, 15));
// // console.log(calc(30, 15));

// function ret(){

//     let num = 50;

//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function(){
//     console.log("Hello!")
// };

// logger(); 

// const calc = (a, b) => a + b;
 
// console.log(calc(15, 20));


// let numberOfFilms;

// function start(){
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     while(numberOfFilms == "" || numberOfFilms == NaN || isNaN(numberOfFilms)){
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     }
// };
// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: true

// };
// function rememberMyFilms(){
//     for (let i = 0; i < 2; i++) {
//         const a = prompt("Один из последних просмотренных фильмов?", ""),
//             b = prompt("На сколько оцените его?", "");
    
//             if(a != null && b != null && a != "" && b != "" &&  a.length < 50 && b.length < 50){
//             personalMovieDB.movies[a] = b;
//             console.log("DONE! ");
//             } else {
//                 console.log("ERROR");
//                 i--; 
//             }
//     } 
// };
// rememberMyFilms();



// function detectPersonalLevel() {
//     if(personalMovieDB.count < 10){
//         console.log("Просмотрено мало фильмов");
//     } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
//         console.log("Среднее количество фильмов!");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("ОШИБКА");
//     };
    
// };
// detectPersonalLevel();


// function showMyDB(hidden){

//     if(!hidden) {
//         console.log(personalMovieDB); 
//     }
// };
// showMyDB(personalMovieDB.privat); 


// function writeYoursGenres(){
//     for(let i = 1; i <= 3; i++){
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i - 1] = genre;
//     }
// };

// // writeYoursGenres(); 


// function first(){
//     //do something
//     setTimeout(function(){

//         console.log(1);
//     }, 500);
// }

// function second(){
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback){
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done(){

//     console.log("Я прошел этот урок!");
// }


// learnJS("JavaScript", done);





 
// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);
// let counter = 0;
// for(let key in options){
//      if(typeof(options[key] === "object"))  {
//         for (let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;

//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }

// }

// console.log(counter);


const arr = [1, 22, 13, 36, 0.8];
arr.sort(compareNum);
console.log(arr);
 function compareNum(a, b){
     return a - b;
 }
// arr.forEach(function(item, i, arr ){
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });
// // arr.pop(); // удаление последнего элемента массива
// // arr.push(16); //добавление элемента в конец массива;
// // console.log(arr);
 
// // for (i = 0; i < arr.length; i++){
// //     console.log(arr[i]);
// // }

// for( let value of arr){
//     console.log(value);
// } // аналог цикла вышенаписанного

// const str = prompt("", "");
// const products = str.split(", ");
// // console.log(products);
//  products.sort();
// console.log(products.join('; '));

