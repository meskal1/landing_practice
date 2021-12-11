"use strict";
// console.log(1);
// let num = 5;
// alert(`Привет мир!`);
// alert(`Я JavaScript!`);
// alert(num);
// let admin;
// let Name;
// Name = "Джон";
// admin = Name;
// alert(admin);
// let ourPlanetName;
// let currentUserName = confirm("Ты здесь главный?");
// let rer = prompt("2", "3");
// let userName = prompt("Введите свое имя", "");
// alert(`Привет ${userName}, ты крутой, умный, добрый, счастливый и красивый человек!`);
// alert(`Спасибо тебе!)`);
// let counter = 1;
// alert(3 * counter);
// ++counter;
// alert(counter);
// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);
// alert(a + b);
// let year = prompt("В каком году была опубликована спецификация ECMAScript-2015?", "");
// if (year == 2015) {
//   alert("Вы правы!");
// } else if (year == null) {
//   alert(`Вы уклонились от ответа!`);
// } else if (year == 0) {
//   alert(`Вы не правы!`);
// } else {
//   alert(`Вы не правы!`);
// }
// let age = prompt("skoka let?", "");
// let accessAllowed = age > 18;
// alert(accessAllowed);
// let qwer = [];
// qwer[3] = prompt("4й", ``);
// qwer[1] = prompt("2й", ``);
// alert(qwer[3]);
// alert(qwer[1]);
// let q_n = prompt("Какое 'официальное' название JavaScript?", ``);
// if (q_n == "ECMAScript") {
//   alert(`Верно!`);
// } else {
//   alert(`Не знаете? ECMAScript!`);
// }
// let num = prompt(`Введите число для проверки`, ``);
// if (num == "") {
//   alert(`Вы ничего не ввели!`);
// } else if (num > 0) {
//   alert(1);
// } else if (num < 0) {
//   alert(-1);
// } else if (num == null) {
//   alert(`Вы отказались проходить тест!`);
// } else if (num == 0) {
//   alert(0);
// } else {
//   alert(`Вы ввели текст вместо числа!`);
// }
// let result, a, b;
// a = prompt(`Введите число a`, ``);
// b = prompt(`Введите число b`, ``);
// result = +a + +b < 4 ? "Мало" : "Много";
// alert(result);
// let message, login;
// message = login == "Сотрудник" ? "Привет" :
// login == "Директор" ? "Здравствуйте" :
// login == "" ? "Нет логина" : "";
// let hour = 11;
// let isWeekend = true;
// if (hour < 10 || hour > 18 || isWeekend) {
//   alert("Офис закрыт.");
// } else {
//   alert("Офис открыт.");
// }
// let age = prompt("Введите число", ``);
// if (!(age >= 14 && age <= 90)) {
//   alert(`ne находится в диапазоне между 14 и 90`);
// } else {
//   alert(`находится в диапазоне между 14 и 90`);
// }
// let age = prompt("Введите число", ``);
// if (age < 14 || age > 90) {
//   alert(`ne находится в диапазоне между 14 и 90`);
// } else {
//   alert(`находится в диапазоне между 14 и 90`);
// }
// let login = prompt(`Введите логин`, ``);
// if (login == "admin") {
//   let password = prompt(`Введите пароль`, ``);

//   if (password == "main") {
//     alert(`Здравствуйте`);
//   } else if (password == null) {
//     alert(`Отменено`);
//   } else {
//     alert(`Неверный пароль`);
//   }
// } else if (login == null || login == "") {
//   alert(`Отменено`);
// } else {
//   alert(`Я вас не знаю`);
// }
// let height = null;
// let width = null;
// let area = height ?? 100 * width ?? 5;
// alert(area);
// for (let i = 0; i < 3; i = i + 1) {
//   alert(i);
// }
// let sum = 0;
// while (true) {
// 	let value = +prompt("Введите число", "");
// 	if (!value) break; // (*)
// 	sum += value;
// }
// alert("Сумма: " + sum);
// for (let i = 2; i < 11; i++) {
// 	if (i % 2 == 0) {
// 		alert(i);
// 	}
// }
// for (let i = 0; i < 3; i++) {
// 	alert(`number ${i}!`);
// }
// let i = 0;
// while (i < 3) {
// 	alert(`number ${i}!`);
// 	i++;
// }
// let num;
// func: do {
// 	num = prompt(`Введите число больше 100`, ``);
// 	if (num == null) break func;
// } while (num < 100);
// let n = 10,
// 	num = 2;
// fun: for (num; num < n; num++) {
// 	for (let x = 2; x < num; x++) {
// 		if (num % x == 0) continue fun;
// 	}
// 	alert(`${num} - простое число из интервала от 2 до ${n}`);
// }
// let browser = prompt(`browser?`, ``);
// if (browser == "Edge") {
// 	alert("You've got the Edge!");
// } else if (browser == "Chrome" || browser == "Firefox" || browser == "Safari") {
// 	alert("Okay we support these browsers too");
// } else {
// 	alert("We hope that this page looks ok!");
// }
// const number = +prompt("Введите число между 0 и 3", "");
// switch (number) {
// 	case 0:
// 		alert("Вы ввели число 0");
// 		break;
// 	case 1:
// 		alert("Вы ввели число 1");
// 		break;
// 	case 2:
// 	case 3:
// 		alert("Вы ввели число 2, а может и 3");
// 		break;
// }
// function checkAge(age) {
// 	age > 18 ? true : confirm("Родители разрешили?");
// }
// checkAge(10);
// function checkAge(age) {
// 	age > 18 || confirm("Родители разрешили?");
// }
// function minNumber(a, b) {
// 	if (a < b) {
// 		return a;
// 	}
// 	return b;
// }
// alert(minNumber(1, -3));
// function powNumber(x, n) {
// 	let result = x;
// 	for (let i = 1; i < n; i++) {
// 		result = result * x;
// 	}
// 	return result;
// }
// alert(powNumber(2, 3));
// let user = {};
// user.namer = 1;
// user.n2amer = "e2e1";
// user.chislo = "111";
// console.log(user);

// let numberOfFilms = +prompt(`Сколько фильмов Вы уже посмотрели?`, "");

// let q1 = prompt(`последний фильм?`, ""),
// 	q2 = prompt(`оценка фильма?`, ""),
// 	q3 = prompt(`последний фильм?`, ""),
// 	q4 = prompt(`оценка фильма?`, "");
// personaMovieDB.movies[q1] = q2;
// personaMovieDB.movies[q3] = q4;
// console.log(personaMovieDB);
// let personaMovieDB = {
// 	movies: {},
// 	count: 10,
// };

// for (let i = 0; i < 2; i++) {
// let q1 = prompt(`последний фильм?`, ""),
// q2 = prompt(`оценка фильма?`, "");
// personaMovieDB.movies[q1] = q2;
// }
// let i = 0;
// do {
// 	let q1 = prompt(`последний фильм?`, "");
// 	while (q1 == null || q1 == "") {
// 		q1 = prompt(`последний фильм?`, "");
// 	}
// 	let q2 = prompt(`оценка фильма?`, "");
// 	while (q2 == null || q2 == "") {
// 		q2 = prompt(`оценка фильма?`, "");
// 	}
// 	i++;
// } while (i < 2);

// console.log(personaMovieDB);
// let num1 = +prompt(`Введите 1-е число`, ``),
// 	num2 = +prompt(`Введите 2-е число`, ``);
// function sum(num1, num2) {
// 	return num1 + num2;
// }
// alert(sum(num1, num2));

// function createCounter() {
// 	let counter = 0;
// 	const myFunction = function () {
// 		counter = counter + 1;
// 		return counter;
// 	};
// 	return myFunction;
// }
// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();
// console.log("example increment", c1, c2, c3);

// let stroka = "строка валуе";
// let y = stroka.slice(6);
// console.log(stroka.slice(6));
// alert(y);

//--------------------------------------------------------------------------------------

// Функция возвращает количество просмотренных фильмов
// function watchFilmsNumber() {
// 	let numberOfFilms = +prompt(`Скока фильмов Вы посмотрели?`, ``);
// 	while (isNaN(numberOfFilms) || numberOfFilms == null || numberOfFilms == "") {
// 		numberOfFilms = +prompt(`Скока фильмов Вы посмотрели?`, ``);
// 	}
// }
// watchFilmsNumber();

// Объект База Данных Кино
// let personaMovieDB = {
	// count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false,
// };

// Функция повторяет вопросы по 2 раза, пока на них не будут даны соответствующие ответы
// function questionsAboutFilmsAndItsRatings(){
// for (let i = 0; i < 2; i++) {
// 	let lastFilmWatch = prompt(`Какой последний фильм Вы смотрели?`, "");
// 	while (lastFilmWatch == null || lastFilmWatch == "" || lastFilmWatch.length > 15) {
// 		lastFilmWatch = prompt(`Какой последний фильм Вы смотрели?`, "");
// 	}
// 	let filmRating = prompt(`Оцените фильм по шкале от 1 до 10?`, "");
// 	while (filmRating == null || filmRating == "" || filmRating.length > 10) {
// 		filmRating = prompt(`Оцените фильм по шкале от 1 до 10?`, "");
// 	}
// 	personaMovieDB.movies[lastFilmWatch] = filmRating;
// }
// }
// questionsAboutFilmsAndItsRatings();

// Функция возвращает кино-достижение зрителя
// function personalMovieAchivment(){
// if (personaMovieDB.count <= 10) {
// 	alert(`просмотрено мало`);
// } else if (personaMovieDB.count > 10 && personaMovieDB.count <= 30) {
// 	alert(`класический зритель`);
// } else if (personaMovieDB.count > 30) {
// 	alert(`киноман`);
// } else {
// 	alert(`error`);
// }
// }
// personalMovieAchivment();

// Фукнция проверяет значение свойства privat в обьекте personaMovieDB
// function showMyDB() {
// 	if (!personaMovieDB.privat) {
// 		alert(`Главный объект программы`);
// 	}
// }
// showMyDB();

// function writeYourGenres() {
// 	for (let i = 1; i <= 3; i++) {
// 		personaMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, ``);
// 	}
// }
// writeYourGenres();
// console.log(personaMovieDB.genres);
//--------------------------------------------------------------------------------
// function ucFirst() {
// 	let Name = "вася";
// return Name.charAt(0).toUpperCase() + Name.slice(1);
// 	return Name[0].toUpperCase() + Name.slice(1);
// }
// console.log(ucFirst());

// let char;
// for (char of "Hello") {
// 	alert(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т. д.)
// }

// let str = "Weidgeitwithidwith";
// alert(str.indexOf("i", 30));
// alert(str.length);

// function fibonacciGenerator (n) {
// 	 let fibonacciArray = [0,1];
// 	 for (let i = 0; i < n; i++){
// 	 let arrayLength = fibonacciArray.length;
// 	 let numberBeforeLast = fibonacciArray[arrayLength - 2];
// 	 let lastNumber = fibonacciArray[arrayLength - 1];
// 	 let addElement = fibonacciArray.push(numberBeforeLast + lastNumber);
// 	 }
//    console.log(fibonacciArray.slice([0], [n]));
// }
// fibonacciGenerator (10);

