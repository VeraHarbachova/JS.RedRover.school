//  Задача 1 Напишите последовательность команд, в результате которых переменные х и у обменяются своими значениями.
// Выведите значения переменных х и у в консоль. Используйте 2 способа.

// 1 способ, с использованием временной переменной:
// let x = 5;
// let y = 10;
// let temporary = x; // временная переменная для обмена значениями
// x = y;
// y = temporary;
// console.log(x);
// console.log(y);

// 2 способ, используя математические действия:

// let x = 5;
// let y = 10;
// x = x + y; // 5 + 10 = 15
// y = x - y; // 15 - 10 = 5
// x = x - y; // 15 - 5 = 10
// console.log(x);
// console.log(y);

// 2. Задача 2 Create variables for the names with age: Tom, Sam, Jack, Ted.
// Tom is 16, each friend is 2 years older, starting from Tom in order.

// a)Count the age of each person;

// b) Insert the names with the age to the string, using concatenation and ${}:
// “Tom is - 16 years old, Sam is - …. years old, Jack is … years old,
//  Ted is … years old. And the total of our age is ….years old”.

// c) Find out what is the Unicode Value of the 1sr letter of the name,
// and add the total to the string: “The total of the Unicode values of
// the 1st letter of the all names is ….!”.

let name1 = "Tom";
let name2 = "Sam";
let name3 = "Jack";
let name4 = "Ted";
let Tom = 16;
let Sam = Tom + 2;
let Jack = Sam + 2;
let Ted = Jack + 2;

console.log(Sam);
console.log(Jack);
console.log(Ted);

console.log(
  `Tom is - ${Tom} years old, Sam is - ${Sam} years old, Jack is ${Jack} years old, Ted is ${Ted} years old. \nAnd the total of our age is ${
    Tom + Sam + Jack + Ted
  } years old.`
);

let firstLetterTom = name1.charCodeAt(0);
let firstLetterSam = name2.charCodeAt(0);
let firstLetterJack = name3.charCodeAt(0);
let firstLetterTed = name4.charCodeAt(0);

console.log(
  `The total of the Unicode values of the 1st letter of the all names is ${firstLetterTom} + ${firstLetterSam} + ${firstLetterJack} + ${firstLetterTed} = ${
    firstLetterTom + firstLetterSam + firstLetterJack + firstLetterTed
  }!`
);
