// Задача 1.
// Выполняйте пошагово.
// 1. Задайте объект room и его параметры:
// ключ height со значением 3
// ключ tv со значением samsung
// ключ big со значением true

const room = {
  height: 3,
  tv: "samsung",
  big: true,
};

// 2. Выведите в alert или console.log все параметры объекта room по очереди

console.log(`Высота комнаты: ${room.height}`);
console.log(`Телевизор: ${room.tv}`);
console.log(`Комната большая? ${room.big}`);

// 3. Выведите в alert или console.log тип данных параметра big

console.log(typeof room.big);

// 4. Выведите в alert или console.log количество символов в строке параметра tv (длину строки)

console.log(room.tv.length);

// 5. Выведите в alert или console.log результат расчёта: длина строки параметра tv минус 1

console.log(room.tv.length - 1);

// 6. Поменяйте samsung на все заглавные буквы и выведите в alert или консоль лог.

console.log(room.tv.toLocaleUpperCase());

// 7. Замените samsung на LG в нашем объекте room

room.tv = "LG";
console.log(room.tv);

// 8. 1. Добавьте в наш объект room ещё одну пару ключ-значение: ключ furniture, значение - массив из 3 строк: "table", "chair", "sofa"

room.furniture = ["table", "chair", "sofa"];
console.log(room.furniture);
console.log(room);

// 2. выведите chair в console.log (путем обращения к массиву)

console.log(room.furniture[1]);

// 9. Удалите из нашего объекта room параметр big

delete room.big;
console.log(room);

// 10. 1. Задайте переменную paint со значением color

let paint = "color";

// 2. Создайте объект room и внутри него задайте ключ:
// в качестве имени ключа возьмите из переменной paint её значение color,
// в качестве значения присвойте blue

const room1 = {
  [paint]: "blue",
};

// 3. Выведите в консоль лог ключ и его значение blue

console.log(`Key: ${paint}, Value: ${room1[paint]}`);

// 5. Создать объект Testing, который обладает 7 принципами тестирования,
// и 4 типа тестирования обладают этими свойствами – 7-ью принципами тестирования из Силлабуса 4.0.
// Выведите в консоль текст, подтверждающий это.

// Создаем объект Testing с принципами тестирования и типами тестирования
const Testing = {
  principles: [
    "1. Testing shows the presence, not the absence of defects.",
    "2. Exhaustive testing is impossible.",
    "3. Early testing saves time and money.",
    "4. Defects cluster together.",
    "5. Tests wear out.",
    "6. Testing is context dependent.",
    "7. Absence-of-defects fallacy.",
  ],
  testTypes: {
    functionalTesting:
      "Functional testing evaluates the functions that a component or system should perform.",
    nonFunctionalTesting:
      "Non-functional testing evaluates attributes other than functional characteristics of a component or system.",
    blackBoxTesting:
      "Black-box testing is specification-based and derives tests from documentation external to the test object.",
    whiteBoxTesting:
      "White-box testing is structure-based and derives tests from the implementation of the system or internal structure",
  },
};

// Выводим в консоль принципы тестирования и типы тестирования
console.log("Testing principles:");
Testing.principles.forEach((principles) => console.log(principles));

console.log("Testing types:");
Object.entries(Testing.testTypes).forEach(([name, description]) =>
  console.log(`${name}: ${description}`)
);
