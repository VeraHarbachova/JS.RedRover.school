// 1. Установить какие методы массива изменяют начальное значение массива:
let homeArray = [17, "test", true, [4, 5], "last"];

let newHomeArray; // для хранения измененного массива

console.log(`homeArray = ${homeArray}`); // [17, 'test', true, [4, 5], 'last']

// The length property returns the length (size) of an array:

// newHomeArray = homeArray.length;
// console.log(`newHomeArray = ${newHomeArray}`); // длина массива
// console.log(`homeArray = ${homeArray}`); // [17, 'test', true, [4, 5], 'last']

// The JavaScript method toString() converts an array to a string of (comma separated) array values.

// newHomeArray = homeArray.toString();
// console.log(`newHomeArray = ${newHomeArray}`);
// console.log(`homeArray = ${homeArray}`); // 17,test,true,4,5,last

// The at() method returns an indexed element from an array.

// newHomeArray = homeArray.at(1)
// console.log(`newHomeArray = ${newHomeArray}`); // test
// console.log(`homeArray = ${homeArray}`); // 17,test,true,4,5,last

// The join() method also joins all array elements into a string.

// newHomeArray = homeArray.join(" * ");
// console.log(`newHomeArray = ${newHomeArray}`); // 17 * test * true * 4,5 * last
// console.log(`homeArray = ${homeArray}`); // 17,test,true,4,5,last

// The pop method removesthe last element from an array

// newHomeArray = homeArray.pop();
// console.log(`newHomeArray = ${newHomeArray}`); // newHome Array = last - возвращает последний удаленный элемент из массива
// console.log(`homeArray = ${homeArray}`); // [17, 'test', true, [4, 5]]

// The push() method adds a new element to an array (at the end):

// newHomeArray = homeArray.push('HELLO');
// console.log(`newHomeArray = ${newHomeArray}`); // 6
// console.log(`homeArray = ${homeArray}`); // 17,test,true,4,5,last,HELLO

// The shift() method removes the first array element and "shifts" all other elements to a lower index.

// newHomeArray = homeArray.shift();
// console.log(`newHomeArray = ${newHomeArray}`); // 17
// console.log(`homeArray = ${homeArray}`); // test,true,4,5,last

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

// newHomeArray = homeArray.unshift("lemon");
// console.log(`newHomeArray = ${newHomeArray}`); // 6
// console.log(`homeArray = ${homeArray}`); // lemon,17,test,true,4,5,last

// Using delete() leaves undefined holes in the array. Use pop() or shift() instead.

// delete homeArray[0];
// console.log(`newHomeArray = ${newHomeArray}`); // undefined
// console.log(`homeArray = ${homeArray}`); // ,test,true,4,5,last

// The concat() method creates a new array by merging (concatenating) existing arrays:

// let arr2 = ['Hello, World!'];
// console.log(`newHomeArray = ${arr2.concat(homeArray)}`); // Hello, World!,17,test,true,4,5,last
// console.log(`homeArray = ${homeArray}`); // 17,test,true,4,5,last

// The copyWithin() method copies array elements to another position in an array:

// newHomeArray = homeArray.copyWithin(2,0);
// console.log(`newHomeArray = ${newHomeArray}`); // 17,test,17,test,true
// console.log(`homeArray = ${homeArray}`); // 17,test,17,test,true

// The flat() method creates a new array with sub-array elements concatenated to a specified depth.

// newHomeArray = homeArray.flat()
// console.log(`newHomeArray = ${newHomeArray}`); // 17,test,true,4,5,last
// console.log(`homeArray = ${homeArray}`); // 17,test,true,4,5,last

// The splice() method can be used to add new items to an array:

// newHomeArray = homeArray.splice(2, 0, 'Kiwi', 'Banan');
// console.log(`newHomeArray = ${newHomeArray}`);
// console.log(`homeArray = ${homeArray}`); // 17,test,Kiwi,Banan,true,4,5,last

// ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array.

// newHomeArray = homeArray.toSpliced(0, 2);
// console.log(`newHomeArray = ${newHomeArray}`); // true,4,5,last
// console.log(`homeArray = ${homeArray}`); // 17,test,true,4,5,last

// The slice() method slices out a piece of an array into a new array:

// newHomeArray = homeArray.slice(1);
// console.log(`newHomeArray = ${newHomeArray}`); // test,true,4,5,last
// console.log(`homeArray = ${homeArray}`); // 17,test,true,4,5,last

// 2. Из текста о принципах тестирования из Силлабуса ISTQB 4.0 составить массив и вывести в консоль в виде текста.

let title = "Testing Principles:";
let principles = [
  "1. Testing shows the presence, not the absence of defects.",
  "2. Exhaustive testing is impossible.",
  "3. Early testing saves time and money.",
  "4. Defects cluster together.",
  "5. Tests wear out.",
  "6. Testing is context dependent.",
  "7. Absence-of-defects fallacy.",
];

console.log(`${title} \n${principles.join("\n")}`);
