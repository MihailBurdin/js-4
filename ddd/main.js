// Задание 1

// let arr = ['Привет', "мир", "!"]
// let result = arr[0] + ', ' + arr[1] + arr[2]
// alert(result);

// Задание 2

// let arr = ['Привет', "мир", "!"]
// let text = arr[0] + ', ' + arr[1] + arr[2]
// alert(text);

// Задание 3

// let arr = ['Привет', "мир", "!"]
// arr[0] = 'Пока'
// let result = arr[0] + ', ' + arr[1] + arr[2]
// alert(result);

// Задание 4
// let obj = [
//     { name: 'Vasya', money: 30000},
//     { name: 'Petya', money: 20000} 
// ];

// for (let i = 0; i < obj.length; i++) {
//     alert(obj[i].name + ', Зарплата ' + obj[i].money);
// }

// Задание 5

// var arr = {
//     'ru': ['голубой', 'краный', "зеленый"],
//     'en': ['blue', 'red', 'green'],
// };

// alert(arr.ru[1])

// Задание 6

// let arr = ['a', 'b', 'c']
// alert(arr);

// Задание 7

// let arr = ['a', 'b', 'c']

// for (let i = 0; i < arr.length; i++){
//     alert(arr[i]);
// }

// Задание 8

// let arr = ['a', 'b', 'c', 'd']
// let result1 = arr[0] + arr[1]
// let result2 = arr[2] + arr[3]
// alert(result1 + ', ' + result2 + ".")

// Задание 9
// arr = [2, 5, 3, 9];
// let act1 = arr[0] * arr[1]
// let act2 = arr[2] * arr[3]
// let result = act1 + ', ' + act2 + ".";
// alert(result);

// Задание 10

// let obj = {a: 1, b: 2, c: 3};

// alert(obj['c']);
// alert(obj.c);

// Задание 11

// obj = {
//     Коля: '1000', 
//     Вася: '500', 
//     Петя: '200'
// };

// alert('Зарплата Пети: ' + obj.Петя + ', ' + 'Зарплата Коли: ' + obj.Коля + '.')

// Задание 12

// let days = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье'
//   };
  
//   let currentDate = new Date();
//   let currentDayNumber = currentDate.getDay();
//   let currentDay = days[currentDayNumber];
  
//   alert(`Сегодня ${currentDay}`);

// Задание 13

// let days = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье'
//   };
  
//   let day = 3;
//   let currentDay = days[day];
  
//   alert(currentDay);

// Задание 14

// let arr =  [ 
// [1, 2, 3], 
// [4, 5, 6], 
// [7, 8, 9] ]

// alert(arr[1][0])

// Задание 15

// let obj = {
//     js:['jQuery', 'Angular'], 
//     php: 'hello', 
//     css: 'world'}

// alert(obj.js[0]);

// Задание 16

// let days = [
//     ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//     ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
//   ];
  
//   let ru = days[0][0]; 
//   let en = days[1][2]; 
  
//  alert(ru);
//  alert(en); 

// Задание 17

// let days = {
//     'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//     'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
//   };
  
//   let lang = 'ru';
//   let day = 1;
  
//   let dayName = days[lang][day];
//  alert(dayName);