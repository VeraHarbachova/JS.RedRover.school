// https://www.codewars.com/kata/55a2d7ebe362935a210000b2

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0];
  }
}

// https://www.codewars.com/kata/5583090cbe83f4fd8c000051

function digitize(n) {
  return String(n).split("").map(Number).reverse();
}

// https://www.codewars.com/kata/53dc54212259ed3d4f00071c

function sum(numbers) {
  "use strict";
  let result = 0;
  for (let item of numbers) {
    result = result + item;
  }
  return result;
}

// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d

function stringToArray(string) {
  return string.split(" ");
}

// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

function arrayPlusArray(arr1, arr2) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum1 = sum1 + arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum2 = sum2 + arr2[i];
  }
  return sum1 + sum2;
}

function arrayPlusArray(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  return arr.reduce((a, b) => a + b);
}

// https://www.codewars.com/kata/563e320cee5dddcf77000158

function getAverage(marks) {
  return Math.floor(marks.reduce((a, b) => a + b) / marks.length);
}

// https://www.codewars.com/kata/57eaeb9578748ff92a000009

function sumMix(x) {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum = sum + Number(x[i]);
  }
  return sum;
}

// https://www.codewars.com/kata/5899642f6e1b25935d000161

function mergeArrays(arr1, arr2) {
  let newArr = [...arr1, ...arr2];
  return newArr
    .sort((a, b) => a - b)
    .filter((el, i) => i === newArr.indexOf(el));
}

// https://www.codewars.com/kata/571effabb625ed9b0600107a

function getLength(arr) {
  //return length of arr
  return arr.length;
}
function getFirst(arr) {
  //return the first element of arr
  return arr[0];
}
function getLast(arr) {
  //return the last element of arr
  return arr[arr.length - 1];
}
function pushElement(arr) {
  var el = 1;
  //push el to arr
  arr.push(el);
  return arr;
}
function popElement(arr) {
  //pop an element from arr
  arr.pop();
  return arr;
}

// https://www.codewars.com/kata/55d277882e139d0b6000005d

var findAverage = function (nums) {
  return nums.reduce((a, b) => a + b) / nums.length;
};

//https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1

function arrayMadness(a, b) {
  let sumSquares = 0;
  let sumCube = 0;

  for (let i = 0; i < a.length; i++) {
    sumSquares = sumSquares + a[i] ** 2;
  }
  for (let j = 0; j < b.length; j++) {
    sumCube = sumCube + b[j] ** 3;
  }
  if (sumSquares > sumCube) {
    return true;
  } else {
    return false;
  }
}

function arrayMadness(a, b) {
  return (
    a.reduce((sum, el) => sum + el ** 2, 0) >
    b.reduce((sum, el) => sum + el ** 3, 0)
  );
}

// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e

function sumOfDifferences(arr) {
  let sortArray = arr.sort((a, b) => b - a);
  let sum = 0;

  for (let i = 0; i < sortArray.length - 1; i++) {
    sum += sortArray[i] - sortArray[i + 1];
  }
  return sum;
}

// https://www.codewars.com/kata/56e2f59fb2ed128081001328

function printArray(array) {
  return array.join();
}

// https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036

function toCsvText(arr) {
  return arr.join("\n");
}

// https://www.codewars.com/kata/511f0fe64ae8683297000001

websites.push("codewars");

// https://www.codewars.com/kata/573f5c61e7752709df0005d2

function mergeArrays(a, b) {
  let sortArr = a.concat(b).sort((a, b) => a - b);
  return sortArr.filter((el, i) => i === sortArr.indexOf(el));
}

// https://www.codewars.com/kata/527b3cd0492b6b15250060af

items = [];
items.push({ a: "b", c: "d" });

// https://www.codewars.com/kata/5703c093022cd1aae90012c9

function find(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return i;
  }
  return "Not found";
}
function find(arr, el) {
  return arr.includes(el) ? arr.indexOf(el) : "Not found";
}

// https://www.codewars.com/kata/56dd9b84fe5754786f0014f7

Array.prototype.filter = function (func) {
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) arr.push(this[i]);
  }
  return arr;
};

// https://www.codewars.com/kata/55c28f7304e3eaebef0000da

function createArray(number) {
  var newArray = [];

  for (var counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }
  return newArray;
}

// https://www.codewars.com/kata/57cc40b2f8392dbf2a0003ce

function check(a, x) {
  return a.includes(x);
}

// https://www.codewars.com/kata/5721a78c283129e416000999

function pickIt(arr) {
  var odd = [];
  var even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return [odd, even];
}

// https://www.codewars.com/kata/5722b3f0bd5583cf44001000

function giveMeFive(obj) {
  //coding here
  let arr = [];
  for (let key in obj) {
    if (key.length == "5") {
      arr.push(key);
    }
    if (obj[key].length == "5") {
      arr.push(obj[key]);
    }
  }
  return arr;
}

// https://www.codewars.com/kata/57216d4bcdd71175d6000560

function padIt(str, n) {
  let num = 0;
  while (n > num) {
    if (n % 2 != 0) str = "*" + str;
    if (n % 2 == 0) str = str + "*";
    n = n - 1;
  }
  return str;
}

// https://www.codewars.com/kata/5721c189cdd71194c1000b9b

function grabDoll(dolls) {
  var bag = [];
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] == "Hello Kitty" || dolls[i] == "Barbie doll") {
      bag.push(dolls[i]);
      if (dolls === "object") continue;
      if (bag.length == 3) break;
    }
  }
  return bag;
}

// https://www.codewars.com/kata/56e6a330715e7221d9000a3b

Number.prototype.times = function (f) {
  for (let i = 0; i < this; i++) {
    f(i);
  }
};
