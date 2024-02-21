// 1. Создать функцию  getGreetings, возвращающую массив, содержащий строки "Hello, World" на разных языках.

// console . log ( "Hello world ! " ) ;
// console . log("! Hola mundo ! " );
// console . log ( "Hallo wereld ! " ) ;
// console . log ( "Пpивeт мир!" ) ;
// Создать декларируемую функцию (function Declaration) и функцию выражение (function Expression).

// function getGreetings () {
//     return ['Hello world!', 'Hola mundo!', 'Hallo wereld!', 'Пpивeт мир!'];
// }
// console.log(getGreetings());

// let getGreetings = function () {
//     return ['Hello world!', 'Hola mundo!', 'Hallo wereld!', 'Пpивeт мир!'];
// }
// console.log(getGreetings());

// 2. Напишите функцию, которая принимает название типа тестирования,
// и возвращает определение этого типа тестирования с соответствии с Силлабусом 4.0. International Software Testing Qualifications Board.

// let arrTestingTypes = ['Functional testing', 'Non-functional testing', 'Black-box testing', 'White-box testing'];

function testingTypes(name) {
  if (name == "Functional testing") {
    return `Functional testing evaluates the functions that a component or system should perform. 
            The functions are “what” the test object should do. 
            The main objective of functional testing is checking the functional completeness, 
            functional correctness and functional appropriateness.`;
  } else if (name == "Non-functional testing") {
    return `Non-functional testing evaluates attributes other than functional characteristics of a component or system. 
            Non-functional testing is the testing of “how well the system behaves”. 
            The main objective of nonfunctional testing is checking the non-functional software quality characteristics. `;
  } else if (name == "Black-box testing") {
    return `Black-box testing (see section 4.2) is specification-based and derives tests from documentation external to the test object. 
            The main objective of black-box testing is checking the system's behavior against its specifications. `;
  } else if (name == "White-box testing") {
    return `White-box testing (see section 4.3) is structure-based and derives tests from the system's implementation or internal 
            structure (e.g., code, architecture, work flows, and data flows). 
            The main objective of white-box testing is to cover the underlying structure by the tests to the acceptable level.`;
  }
}

console.log(testingTypes("Functional testing"));
console.log(testingTypes("Non-functional testing"));
console.log(testingTypes("Black-box testing"));
console.log(testingTypes("White-box testing"));
