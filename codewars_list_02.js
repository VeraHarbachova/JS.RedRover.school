// https://www.codewars.com/kata/5168bb5dfe9a00b126000018

function solution(str){
    return str.split('').reverse().join('')
  }

// https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript

function boolToWord( bool ){
    if (bool == true) {
        return "Yes"
        } else {
      return "No"
    }
  }

// https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript

function numberToString(num) {
    return String(num)
  }

// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

function repeatStr (n, s) {
    return s.repeat(n);
  }

// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

function noSpace(x){
    return x.replaceAll(" ", "")
    }

https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript

const stringToNumber = function(str){
    return Number(str)
    return null;
  }

// https://www.codewars.com/kata/55a70521798b14d4750000a4/train/javascript

function greet(name){
    return `Hello, ${name} how are you doing today?`
  }

// https://www.codewars.com/kata/551b4501ac0447318f0009cd/train/javascript

function booleanToString(b){
    return String(b)
  }

// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript

function stringToArray(string){

	return string.split(" ")

}
// https://www.codewars.com/kata/5966e33c4e686b508700002d

function sumStr(a,b) {
    let sum = Number(a) + Number(b);
    return sum + ""
  }

// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript

String.prototype.isUpperCase = function() {
    return this.toString() === this.toUpperCase()
  }

// https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript

function stringy(size) {
    let pattern = "10";
  
    let result = pattern.repeat(size/2);
  
    if (size % 2 == 1) {
      result = result + "1"
    } 
    return result
  }

// https://www.codewars.com/kata/57fae964d80daa229d000126

function remove (string) {
    let newString = '';
    if (string.charAt(string.length - 1) == '!') {
      newString = string.slice(0, string.length - 1)
      return newString;
  } else {
      return string;
    }
  }

  function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
  }

// https://www.codewars.com/kata/57a55c8b72292d057b000594

  function reverse(string){
    return string.split(" ").reverse().join(' ')
   }

// https://www.codewars.com/kata/55c90cad4b0fe31a7200001f

function buildString(...template){
    return `I like ${template.join(', ')}!`;
  }

// https://www.codewars.com/kata/57e1e61ba396b3727c000251/train/javascript

function stringClean(s){
    return s.replace( /[0-9]/g, '') 
  }

// https://www.codewars.com/kata/571edea4b625edcb51000d8e

var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  return d1+a2+d2;
}
function Bee(){
  //select some variable to combine "Bee"
  return b1+e2+e2;
}
function banana(){
  //select some variable to combine "banana"
  return b2+a2+n2+a2+n2+a2;
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer2(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer3(){
  //the answer should be "yes" or "no"
  return "yes";
}

// https://www.codewars.com/kata/571edea4b625edcb51000d8e

var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  return d1+a2+d2;
}
function Bee(){
  //select some variable to combine "Bee"
  return b1+e2+e2;
}
function banana(){
  //select some variable to combine "banana"
  return b2+a2+n2+a2+n2+a2;
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer2(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer3(){
  //the answer should be "yes" or "no"
  return "yes";
}

// https://www.codewars.com/kata/55f73f66d160f1f1db000059

function combineNames(firstname, lastname) {
    return `${firstname} ${lastname}`
  }

// https://www.codewars.com/kata/596fba44963025c878000039

function contamination(text, char){
    if (text.length >= 1) {
      return char.repeat(text.length)
    } else {
      return ''
    }
  }

// https://www.codewars.com/kata/57a37f3cbb99449513000cd8

function getNumberFromString(s) {
    return Number(s.replace(/[^0-9]/g, ''));
  }

// https://www.codewars.com/kata/55a14f75ceda999ced000048

let TempleStrings = function(obj, feature) {
    return `${obj} are ${feature}`
  }

// https://www.codewars.com/kata/582e4c3406e37fcc770001ad

function joinStrings(string1, string2){
    return `${string1} ${string2}`
 }

// https://www.codewars.com/kata/57280481e8118511f7000ffa

function splitAndMerge(string, separator) {
    let words = string.split(' ')
    let letters = words.map(el => el.split('').join(separator)).join(' ')
    return letters
  }

// https://www.codewars.com/kata/57277a31e5e51450a4000010

function firstToLast(str,c){
    if (!str.includes(c)) {
      return -1
    }
     return (str.lastIndexOf(c) - str.indexOf(c)) 
   }

// https://www.codewars.com/kata/57274562c8dcebe77e001012

function cutIt(arr){
    let wordLength = arr.map(el => el.length);
    let min = Math.min(...wordLength);
    let newArr = arr.map(el => el.slice(0, min));
    return newArr;
  }

// https://www.codewars.com/kata/5729b103dd8bac11a900119e

function fiveLine(s){
    let removeSpace = s.trim();
    let newString = '';
  
    for (let i = 1; i <= 5; i++) {
      if (i === 5) {
        newString = newString + `${removeSpace.repeat(i)}`
        break
      }
      newString = newString + `${removeSpace.repeat(i)}\n`;
    }
    return newString
  }

// https://www.codewars.com/kata/644b17b56ed5527b09057987

const STRANGE_STRING = "ß"

// https://www.codewars.com/kata/5265326f5fda8eb1160004c8

function numberToString(num) {
    return String(num)
  }

// https://www.codewars.com/kata/56dec885c54a926dcd001095

function opposite(number) {
    return -number
  }

// https://www.codewars.com/kata/544675c6f971f7399a000e79

const stringToNumber = function(str){
    return Number(str)
}

// https://www.codewars.com/kata/5583090cbe83f4fd8c000051

function digitize(n) {
    return Array.from(String(n), Number).reverse()
  }

// https://www.codewars.com/kata/576b93db1129fcf2200001e6

function sumArray(array) {
    if (array == [] || array == null) {
      return 0
    }
    let sorted = array.sort((a, b) => a - b).slice(1,-1)
    let sum = 0
    for (let item of sorted) {
      sum = sum + item
    }
    return sum
  }

// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

function firstNonConsecutive (arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[i - 1] + 1) {
        return arr[i]
      }   
    }
    return null
  }

// https://www.codewars.com/kata/55edaba99da3a9c84000003b

function divisibleBy(numbers, divisor){
    let arr = []
    
    for (let item of numbers) {
      if (item % divisor == 0) {
        arr.push(item)
      }
    }
      return arr
    }

// https://www.codewars.com/kata/59342039eb450e39970000a6

function oddCount(n){
    let count = 0;
    for (let i = 0; i < n; i++) {
    if (i % 2 != 0) {
      count = count + 1
    }
  } 
    return count
  }

// https://www.codewars.com/kata/58ca658cc0d6401f2700045f

function findMultiples(integer, limit) {
    let arr = []
  
     for (let i = 1; i <= limit; i++) {
       
       if (integer*i <= limit) {
         
         arr.push(integer * i)
       }
     }
    
    return arr
  }

// https://www.codewars.com/kata/59441520102eaa25260000bf

function unusualFive() {
    let str = 'qwert';
    return str.length;
  }

// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed

function nthEven(n){
    return n * 2 - 2;
  }

// https://www.codewars.com/kata/571edd157e8954bab500032d

let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1(){
  let a = v1,   
      b = v1;   
  return a + b;
}

//Please refer to the example above to complete the following functions
function equal2(){
  let a = v3 , //set number value to a
      b = v1 ; //set number value to b
  return a - b;
}

function equal3(){
  let a = v1 , //set number value to a
      b = v5 ; //set number value to b
  return a * b;
}

function equal4(){
  let a = v4 , //set number value to a
      b = v5 ; //set number value to b
  return a / b;
}

function equal5(){
  let a = v6 , //set number value to a
      b = v3 ; //set number value to b
  return a % b;
}

// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce

function multiTable(number) {
    let str = ''
    for (let i = 1; i <= 10; i++) {
      str = str + `${i} * ${number} = ${i * number}\n`
    }
    return str.substring(0, str.length-1)
  }

// https://www.codewars.com/kata/5a805d8cafa10f8b930005ba

function nearestSq(n){
    return Math.round(Math.sqrt(n)) ** 2;
 }

 // https://www.codewars.com/kata/57a37f3cbb99449513000cd8

 function getNumberFromString(s) {
    return Number(s.replace(/[^0-9]/g, ''));
  }

// https://www.codewars.com/kata/57126304cdbf63c6770012bd

function isDigit(s) {
    return s == parseFloat(s);
   }

// https://www.codewars.com/kata/5708f682c69b48047b000e07

function multiply(number){
    if (number > 0) {
      return number * 5 ** Number((number.toString().length));
    } else {
      return number * 5 ** Number((number.toString().length-1));
    }
  }

// https://www.codewars.com/kata/5862f663b4e9d6f12b00003b

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    return (blueStart - bluePulled)/((blueStart - bluePulled) + (redStart - redPulled))
  }

// https://www.codewars.com/kata/5763bb0af716cad8fb000580

function countSquares(cuts){
    return (cuts ? 6 * Math.pow(cuts, 2) + 2 : 1)
  }

// https://www.codewars.com/kata/57256064856584bc47000611

function howManySmaller(arr,n){
    // Mission 1: Round all elements in the array to two decimal places
    let roundedArr = arr.map((number) => Number(number.toFixed(2)));
  
    // Mission 2: Count the number of elements smaller than n
    let count = 0;
    for (let number of roundedArr) {
      if (number < n) {
        count++;
      }
    }
    return count;
  }

// https://www.codewars.com/kata/57238ceaef9008adc7000603

function colorOf(r,g,b){
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }


// https://www.codewars.com/kata/568018a64f35f0c613000054

class Guesser {
    constructor(number, lives) {
      this.number = number;
      this.lives = lives;
    }
    guess(n) {
    if (this.lives == 0) {
      throw new Error('You have no more life');
      }
    else if (n === this.number) {
      return true; 
    } else {
      this.lives--;
      return false;
      }
    }
  }

// https://www.codewars.com/kata/5722fd3ab7162a3a4500031f

function whatNumberIsIt(n){
    if (isNaN(n)) {
      return 'Input number is Number.NaN'
    } else if(!isFinite(n)){
      if(n>0){
        return "Input number is Number.POSITIVE_INFINITY"
      }
      else{
        return "Input number is Number.NEGATIVE_INFINITY"
      }
    } else if (n == 0) {
      return 'Input number is Number.MIN_VALUE'
    }
    
    else if (n >= 1.7976931348623157e+308) {
      return 'Input number is Number.MAX_VALUE'
    }
    else if (n <= 5e-324) {
      return 'Input number is Number.MIN_VALUE'
    }
    else if (isNaN(n)) {
      return 'Input number is Number.NaN'
    }
    else {
      return `Input number is ${n}`
    }
  }

// https://www.codewars.com/kata/53369039d7ab3ac506000467

function boolToWord( bool ){
    if (bool == true) {
        return "Yes"
        } else {
      return "No"
    }
  }

// https://www.codewars.com/kata/551b4501ac0447318f0009cd

function booleanToString(b){
    return String(b)
  }

// https://www.codewars.com/kata/571f832f07363d295d001ba8

function trueOrFalse(val){
    if (val == false || val === false || val == null ) return "false"          
    else return "true"
  }

// https://www.codewars.com/kata/5808dcb8f0ed42ae34000031

function switchItUp (sfsf) {
    let number=''
    switch(sfsf) {
      case 0:
      number = "Zero";
      break;
      
       case 1:
      number = "One";
      break;
      
       case 2:
      number = "Two";
      break;
      
       case 3:
      number = "Three";
      break;
      
      case 4:
      number = "Four";
      break;
      
      case 5:
      number = "Five";
      break;
      
      case 6:
      number = "Six";
      break;
      
      case 7:
      number = "Seven";
      break;
      
      case 8:
      number = "Eight";
      break;
      
      case 9:
      number = "Nine";
      break;
    }
    return number
  }

// https://www.codewars.com/kata/572059afc2f4612825000d8a

function howManydays(month){
    var days;
    switch (month){
        case 1:
        days = 31;
        break;
        
        case 3:
        days = 31;
        break;
        
        case 5:
        days = 31;
        break;
        
        case 7:
        days = 31;
        break;
        
        case 8:
        days = 31;
        break;
        
        case 10:
        days = 31;
        break;
        
        case 12:
        days = 31;
        break;
        
        case 4:
        days = 30;
        break;
        
        case 6:
        days = 30;
        break;
        
        case 9:
        days = 30;
        break;
        
        case 11:
        days = 30;
        break;
        
        case 2:
        days = 28;
        break;
    
    }
    return days;
  }

// https://www.codewars.com/kata/55c933c115a8c426ac000082

function evalObject(value){
    var result = 0;
    switch(value.operation){
      case'+': result = value.a + value.b; break;
      case'-': result = value.a - value.b; break;
      case'/': result = value.a / value.b; break;
      case'*': result = value.a * value.b; break;
      case'%': result = value.a % value.b; break;
      case'^': result = Math.pow(value.a, value.b); break;
    }
    return result;
  }

// https://www.codewars.com/kata/64fbfe2618692c2018ebbddb

function flickSwitch(arr) {
    let flagSwitch = true;
  
    return arr.map((element) => {
      if (element === 'flick') {
        flagSwitch = !flagSwitch;
      }
      return flagSwitch;
    });
  }

// https://www.codewars.com/kata/57202aefe8d6c514300001fd

function saleHotdogs(n) {
    //return n < 5 ? 100 : n >= 5 && n < 10 ? 95 : n >= 10 ? 90
    if (n < 5) return n * 100
    else if (n >= 5 && n < 10) return n * 95
    if (n >= 10) return n * 90
  }

// https://www.codewars.com/kata/57089707fe2d01529f00024a

function checkAlive (health) {
    if (health > 0) {
      return true
    } else {
      return false
    }
  }

// https://www.codewars.com/kata/571f832f07363d295d001ba8

function trueOrFalse(val){
    if (val == false || val === false || val == null ) return "false"          
    else return "true"
  }

  