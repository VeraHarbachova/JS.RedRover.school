// 1. Codewars
// Basic variable assignment
// https://www.codewars.com/kata/50ee6b0bdeab583673000025

var a = "code";
var b = "wa.rs";
var name = a + b;
console.log(name);

// Find variable which breaks strict comparison!
// https://www.codewars.com/kata/560f8d41cf6e1fe5c900002e/train/javascript

function findStrangeValue() {
  let x = NaN;
  if (x === x);
  {
    return x;
  }
}
console.log(findStrangeValue());

// 2. Установить какие методы строк изменяют начальное значение строки.

let s = "Knowledge of built-in JavaScript methods speeds up a tester's work.";

console.log(s.charAt(0)); // возвращает символ по индексу
console.log(s[0]); // возвращает символ по индексу
console.log(s.charAt(s.length - 1)); // возвращает символ по индексу
// извлечение подстроки:
console.log(s.substring(1, 4)); //извлекает интервал от первого до второго индекса, указанных в скобках
console.log(s.substr(1, 3)); // извлекает интервал, первый параметр - индекс, второй - длина
console.log(s.slice(1, 4)); // извлекает интервал  и возвращает часть в новой строке
console.log(s.slice(-3)); // извлекает с конца строки
console.log(s.indexOf("l")); // индекс первого найденного символа
console.log(s.lastIndexOf("l")); // поиск справа налево
console.log(s.split(" ")); // разделяет строку на элементы, преобразует в массив
console.log(s.replace("l", "L")); // выполняет замену
console.log(s.replaceAll("l", "L")); // выполняет замену всех элементов
console.log(s.toUpperCase()); // верхний регистр
console.log(s.toLowerCase()); // нижний регистр
// console.log(s);

// 3. Исправьте текст:

let rightEnglishText =
  "testing – The process within the software development lifecycle that evaluates the quality of a component or system and related work products.";
let wrongEnglishText =
  "testing – The process test within the objective software development The lifecycle purpose that evaluates for the testing quality of a component or system and related work products.";
wrongEnglishText = rightEnglishText;
console.log(wrongEnglishText);
