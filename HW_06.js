// Задача.
// Создание простого конструктора: Создайте конструктор Person, который принимает параметры name и age,
// и создает объекты, представляющие людей. Каждый объект должен иметь метод greet,
// который выводит приветствие с именем и возрастом этого человека.
// Изучение прототипов: Расширьте предыдущий пример, добавив метод celebrateBirthday в прототип Person,
// который увеличивает возраст человека на единицу.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(
    `Hello, my name is ${this.name}, and I am ${this.age} years old.`
  );
};

Person.prototype.celebrateBirthday = function () {
  this.age++;
  console.log(`I am ${this.age} years old today.`);
};

let firstPerson = new Person("Alex", 30);
firstPerson.greet();
firstPerson.celebrateBirthday();

// Создать конструктор объекта Testing, который обладает 7 принципами тестирования,
// и 4 типа тестирования обладают этими свойствами – 7-ью принципами тестирования из Силлабуса 4.0.
// Выведите в консоль текст, подтверждающий это.
// Используя данный конструктор можно создавать конкретный экземпляр тестирования программного продукта.

// Конструктор объекта Testing
function Testing() {
  this.principles = [
    "Testing shows the presence, not the absence of defects.",
    "Exhaustive testing is impossible.",
    "Early testing saves time and money.",
    "Defects cluster together.",
    "Tests wear out.",
    "Testing is context dependent.",
    "Absence-of-defects fallacy.",
  ];
  this.types = [
    "Functional testing",
    "Non-functional testing",
    "Black-box testing",
    "White-box testing",
  ];
}

// Создание экземпляра тестирования
const firstTesting = new Testing();

// Вывод в консоль
console.log("Testing Principles:");
firstTesting.principles.forEach((principle) => console.log(principle));
console.log("\nTesting Types:");
firstTesting.types.forEach((type) => console.log(type));
