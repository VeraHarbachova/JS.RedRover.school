// Задача 1.
// Напишите программу для бара-автомата.
// Клиент вводит имя Name и возраст age и получает напиток.
// Если клиент моложе 21 года, то выводится строка “Возьмите стакан сока”,
// если клиенту 21 или больше,  выводится строка “Могу предложить бокал вина”,
// если больше 80-ти,выводится строка “Может, кефир?”

let name = prompt("What is your name?");
let age = prompt("Whayt is your age?");

if (age < 21) {
  console.log("Возьмите стакан сока");
} else if (age >= 21 && age < 80) {
  console.log("Могу предложить бокал вина");
} else if (age >= 80) {
  console.log("Может, кефир?");
}

// Задача 2.
// Вычислить BMI = вес(кг)/рост(м)*2 и вывести комментарии:
// Underweight (Below 18.5) - выводит надпись “Мало каши ел(а) •
// Healthy Weight (18.5 - 24.9) выводит надпись “Молодец! Так держать!”•
// Overweight (25.0 - 29.9) выводит надпись” А тортик лучше отдать соседке” •
// Obesity (30.0 and Above) выводит надпись “С завтрашнего дня - на воде и огурцах!”

let weight = prompt("What is your weight?");
let height = prompt("What is your height?");
let BMI = weight / height ** 2;

if (BMI < 18.5) {
  console.log("Мало каши ел(а).");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("Молодец! Так держать!");
} else if (BMI >= 25.0 && BMI <= 29.9) {
  console.log("А тортик лучше отдать соседке.");
} else if (BMI >= 30.0) {
  console.log("С завтрашнего дня - на воде и огурцах!");
}

// Задача 3.
// Напишите программу для расчета стоимости билетов.
// Для пассажиров старше 18 лет- полная цена,
// для младенцев младше 2 лет - 10% стоимости,
// для детей от 2-х до 18ти лет - 50 % стоимости,
// для пенсионеров старше 65 лет - 60% стоимости.

// let age = prompt("What is your age?");
// let price = 100;
// let totalPrice;
// if (age > 18 && age < 65) {
//   totalPrice = price;
//   console.log(totalPrice);
// } else if (age < 2) {
//   totalPrice = price - price * 0.9;
//   console.log(totalPrice);
// } else if (age >= 2 && age <= 18) {
//   totalPrice = price / 2;
//   console.log(totalPrice);
// } else if (age >= 65) {
//   totalPrice = price * 0.4;
//   console.log(totalPrice);
// }
