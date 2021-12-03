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
