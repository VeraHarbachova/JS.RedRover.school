// Продолжение задач Meeting 2
// https://www.codewars.com/kata/57cc4853fa9fc57a6a0002c2

function smallEnough(a, limit) {
  return a.every((el) => (el <= limit ? true : false));
}

// https://www.codewars.com/kata/586ec0b8d098206cce001141

function inverseSlice(items, a, b) {
  return items.slice(0, 0 + a).concat(items.slice(b, items.length));
}

function inverseSlice(items, a, b) {
  return [...items.slice(0, a), ...items.slice(b)];
}

// https://www.codewars.com/kata/586e1d458cb711f0a800033b

function processData(data) {
  return data.reduce((acc, [curr1, curr2]) => acc * (curr1 - curr2), 1);
}

function processData(data) {
  let result = 1;

  for (let item of data) {
    result = result * (item[0] - item[1]);
  }
  return result;
}

// https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50

function loopArr(arr, direction, steps) {
  let array = [];
  let len = arr.length - steps;
  let newArrLeft = arr.slice(0, steps);
  let newArrRight = arr.slice(-steps);

  for (let i = 0; i < len; i++) {
    if (direction == "left") {
      array.push(arr[i + steps]);
    } else if (direction == "right") {
      array.push(arr[i]);
    }
  }

  if (direction == "left") {
    return array.concat(newArrLeft);
  } else {
    return newArrRight.concat(array);
  }
}
