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
// console.log(personalMovieDB);
if (4 == 4) {
    console.log("ok!");
} else {
    console.log("Error!"); //условия if ;
}


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
// }

for (i = 1; i < 10; i++) {
    if (i === 6) {
        // break;// прервать
        continue; //продолжить циклы
    }
    console.log(i);
}