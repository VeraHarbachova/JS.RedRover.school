// https://www.codewars.com/kata/55a70521798b14d4750000a4/train/javascript

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

// https://www.codewars.com/kata/5859d3325a8a0747180000c6/train/javascript

function hello(name) {
  return `Hello, ${name}`;
}

// https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript

function bonusTime(salary, bonus) {
  if (bonus == true) {
    return "£" + salary * 10;
  } else {
    return "£" + salary;
  }
}

// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else if (num == 0) {
    return 0;
  } else {
    return num;
  }
}

// https://www.codewars.com/kata/555a67db74814aa4ee0001b5

function testEven(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

// https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/javascript

function paperwork(n, m) {
  return n > 0 && m > 0 ? m * n : 0;
}

function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  } else {
    return m * n;
  }
}
