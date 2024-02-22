// 1. Array length:
// - Задание 1.1: Создайте массив `numbers` и используйте свойство `length`, чтобы определить, сколько элементов находится в массиве.

let numbers = [1, "welcome", true, 22, 45];
let lengthArr = numbers.length;
console.log(lengthArr);

// - Задание 1.2: Напишите функцию `arrayLength`, которая принимает массив в качестве аргумента и возвращает его длину.

function arrayLength(arr) {
  return arr.length;
}
console.log(arrayLength(numbers));
console.log(arrayLength([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 2. Array toString():
// - Задание 2.1: Создайте массив `colors` с несколькими цветами и используйте метод `toString()`, чтобы преобразовать его в строку.

let colors = ["white", "black", "red", "green", "yellow", "pink", "blue"];
console.log(colors.toString());

// - Задание 2.2: Напишите функцию `arrayToString`, которая принимает массив чисел в качестве аргумента и возвращает строку, представляющую этот массив.

function arrayToString(arr) {
  return arr.toString();
}
console.log(arrayToString(colors));

// 3. Array at():
// - Задание 3.1: Создайте массив `letters` и используйте метод `at()` для получения элемента массива по индексу.

let letters = ["a", "b", "c", "d", "e", "f", "g"];
console.log(letters.at(2));

// - Задание 3.2: Напишите функцию `getElementAtIndex`, которая принимает массив и индекс в качестве аргументов и возвращает элемент массива по указанному индексу.

function getElementAtIndex(arr, index) {
  return arr.at(index);
}
console.log(getElementAtIndex(letters, 3));

// - Задание 3.3: Напишите  функцию, которая возвращает последний элемент переданного массива.

function getElementLastIndex(arr) {
  return arr.at(arr.length - 1);
}
console.log(getElementLastIndex(letters));

// 4. Array join():
// - Задание 4.1: Создайте массив `words` и используйте метод `join()`, чтобы объединить его элементы в строку с пробелами между ними чтобы получилось предложение.

let words = ["Welcome", "to", "Paris!"];
console.log(words.join(" "));

// - Задание 4.2: Напишите функцию `arrayJoin`, которая принимает массив строк и объединяет их в одну строку с заданным разделителем.

function arrayJoin(arr, separator) {
  return arr.join(separator);
}
console.log(arrayJoin(words, " "));

// - Задание 4.3: Создайте из массива ["In this syllabus, the following five test levels are described:", "component testing,", "component integration testing,", "system testing,", "system integration testing,", "acceptance testing."] следующий текст:

// "In this syllabus, the following five test levels are described: the component testing, the component integration testing, the system testing, the system integration testing, the acceptance testing."

let arrStr = [
  "In this syllabus, the following five test levels are described:",
  "component testing,",
  "component integration testing,",
  "system testing,",
  "system integration testing,",
  "acceptance testing.",
];
console.log(arrayJoin(arrStr, " the "));
console.log(arrStr);

// 5. Array pop():
// - Задание 5.1: Создайте массив `items` и используйте метод `pop()`, чтобы удалить последний элемент из него.

let items = ["hello", "name", 45, 70, true, false];
console.log(items.pop());
console.log(items);

// - Задание 5.2: Напишите функцию `removeLastElement`, которая принимает массив и удаляет последний элемент из него.

function removeLastElement(arr) {
  return arr.pop();
}
let arrForPop = [1, 2, true, "hello", 25];
console.log(removeLastElement(arrForPop));
console.log(arrForPop);

// 6. Array push():
// - Задание 6.1: Создайте массив `fruit` и используйте метод `push()`, чтобы добавить новый фрукт в конец массива.

let fruit = ["apple", "orange", "ananas"];
console.log(fruit.push("banana"));
console.log(fruit);

// - Задание 6.2: Напишите функцию `addNewItem`, которая принимает массив и новый элемент, и добавляет этот элемент в конец массива.

function addNewItem(arr, item) {
  return arr.push(item);
}
console.log(addNewItem(fruit, "grape"));
console.log(fruit);

// 7. Array shift():
// - Задание 7.1: Создайте массив `names` и используйте метод `shift()`, чтобы удалить первый элемент из него.

let names = ["Beata", "Alex", "Cris", "Archi"];
console.log(names.shift());
console.log(names);

// - Задание 7.2: Напишите функцию `removeFirstElement`, которая принимает массив и удаляет первый элемент из него.

function removeFirstElement(arr) {
  return arr.shift();
}
console.log(removeFirstElement(names));
console.log(names);

// 8. Array unshift():
// - Задание 8.1: Создайте массив `cities` и используйте метод `unshift()`, чтобы добавить новый город в начало массива.
let cities = ["London", "Berlin", "Warsaw", "Paris"];
console.log(cities.unshift("Madrid"));
console.log(cities);

// - Задание 8.2: Напишите функцию `addNewFirstElement`, которая принимает массив и новый элемент, и добавляет этот элемент в начало массива.

function addNewFirstElement(arr, item) {
  return arr.unshift(item);
}
console.log(addNewFirstElement(cities, "Riga"));
console.log(cities);

// 9. Array delete(): (Нет такого метода в стандартном API JavaScript)

// два задания с использованием оператора `delete` для массива:

// - Задание 9.1. Удаление элемента по индексу:
// Напишите функцию `removeItemByIndex`, которая принимает массив и индекс элемента, который нужно удалить,
// и использует оператор `delete`, чтобы удалить элемент с указанным индексом из массива.

let arrForDelete = [1, 2, 3, true, 4, 5, 6];
function arrDeleteItem(arr, index) {
  return delete arr[index];
}
console.log(arrDeleteItem(arrForDelete, 3));
console.log(arrForDelete);

// Задание 9.2. Очистка массива:
// Напишите функцию `clearArray`, которая принимает массив и использует оператор `delete`, чтобы удалить все его элементы и сделать массив пустым.

function clearArray(arr) {
  for (let i = 0; i <= arr.length; i++) {
    delete arr[i];
  }
  return arr;
}
console.log(clearArray(arrForDelete));
console.log(arrForDelete.length);
console.log(arrForDelete[0]);

// 10. Array concat():
// - Задание 10.1: Создайте два массива `arr1` и `arr2` и используйте метод `concat()`, чтобы объединить их в один массив.

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let newArr = arr1.concat(arr2);
console.log(newArr);
console.log(arr1);
console.log(arr2);

// - Задание 10.2: Напишите функцию `concatArrays`, которая принимает два массива и возвращает новый массив, объединяя их.

function concatArrays(arr1, arr2) {
  let newArray = [];
  return (newArray = arr1.concat(arr2));
}
console.log(concatArrays([1, 2], [3, 4]));
console.log(concatArrays(arr1, arr2));

// 11. Array copyWithin():
// - Задание 11.1: Создайте массив `numbers` и используйте метод `copyWithin()`, чтобы скопировать элементы из одной части массива в другую.

let numbers1 = ["hello", 1, 2, true];
let newNumbers1 = numbers1.copyWithin(1, 3);
console.log(numbers1);
console.log(newNumbers1);

// - Задание 11.2: Напишите функцию `copyWithinExample`, которая принимает массив и копирует часть массива внутри него самого,
// смещая и перезаписывая существующие элементы, используя метод `copyWithin()`.

function copyWithinExample(arr, target, start, end) {
  return arr.copyWithin(target, start, end);
}
console.log(copyWithinExample(numbers1, 2, 3));

// 12. Array flat():
// - Задание 12.1: Создайте массив `nestedArray` с вложенными массивами и используйте метод `flat()`, чтобы преобразовать его в одномерный массив.

let nestedArray = [
  [1, 2],
  [true, false],
  ["yes", "no"],
];
console.log(nestedArray.flat());
console.log(nestedArray);

// - Задание 12.2: Напишите функцию `flattenArray`, которая принимает массив, содержащий вложенные массивы, и использует метод `flat()`,
// чтобы "сплющить" массив до одномерного массива.

function flattenArray(arr) {
  return arr.flat();
}
console.log(flattenArray(nestedArray));

// 13. Array splice():
// - Задание 13.1: Создайте массив `fruits` и используйте метод `splice()`, чтобы удалить несколько элементов из массива
// и вставить новые элементы на их место.

let fruits = ["Banana", "Apple", "Grape", "Orange"];
console.log(fruits.splice(0, 1, "Ananas"));
console.log(fruits);

// - Задание 13.2: Напишите функцию `removeElements`, которая принимает массив и использует метод `splice()`,
// чтобы удалить элементы из массива по заданному индексу и количеству элементов.

function removeElements(arr, start, count, item) {
  return arr.splice(start, count, item);
}
console.log(removeElements(fruits, 2, 2, "Kiwi"));
console.log(fruits);

// 14. Array toSpliced():
// - Задание 14.1: Создайте массив `months` и используйте метод `splice()`,
// чтобы удалить несколько элементов из массива и вставить новые элементы на их место.

let months = ["February", "Marth", "April", "May", "June", "July"];
console.log(months.toSpliced(0, 0, "January"));
console.log(months);

//  - Задание 14.2: Напишите функцию `removeElementsSafely`, которая принимает массив и использует метод `toSpliced()`,
// чтобы удалить элементы из массива по заданному индексу и количеству элементов.

function removeElementsSafely(arr, start, del, item) {
  return arr.toSpliced(start, del, item);
}
console.log(removeElementsSafely(months, 2, 1, "August"));
console.log(months);

// 15. Array slice():
// - Задание 15.1: Создайте массив `letters` и используйте метод `slice()`, чтобы выбрать только определенные буквы из массива.

let letters1 = ["h", "a", "b", "c", "e", "l", "l", "o"];
console.log(letters1.slice(2, 4));
console.log(letters1);

// - Задание 15.2: Напишите функцию `getSubarray`, которая принимает массив и возвращает подмассив,
// используя метод `slice()`, чтобы выбрать элементы из определенного диапазона индексов.

function getSubarray(arr, start, end) {
  return arr.slice(start, end);
}
console.log(getSubarray(letters1, 5, 7));
console.log(letters1);
