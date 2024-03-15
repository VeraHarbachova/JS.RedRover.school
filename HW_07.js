// Задача.
// Определите класс Shape.
// Он имеет три свойства: name, sides, и sideLength.
// Этот класс моделирует только фигуры, все стороны которых имеют одинаковую длину, например квадрат или равносторонний треугольник.
// Добавьте конструктор в этот класс.
// Конструктор принимает аргументы для свойств name, sides и sideLength и инициализирует их.
// Добавьте в класс новый метод calcPerimeter(), который вычисляет ее периметр (длину внешнего края фигуры) и записывает результат в консоль.
// Создайте новый экземпляр класса Shape с именем square.
// Дайте name ему square, sides =  и sideLength = 5​
// Вызовите свой calcPerimeter() метод в экземпляре, чтобы проверить, записывает ли он результаты вычислений в консоль браузера, как ожидалось.
// Создайте новый экземпляр ShapeCalled triangle с name -  triangle и sidesof = 3,  sideLength = 3
// Вызовите  triangle.calcPerimeter(), чтобы убедиться, что все работает.

class Shape {
  name;
  sides;
  sideLength;
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    console.log(
      `The perimeter of ${this.name} equals ${this.sides * this.sideLength}.`
    );
  }
}

let square = new Shape("square", 4, 5);
square.calcPerimeter(); // 20

let triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter(); // 9

// Задача.
// 1) создать Square класс, который наследуется от Shape, и добавляет calcArea()метод, вычисляющий площадь квадрата.
// 2) Также настройте конструктор так, чтобы name свойству Square экземпляров объекта автоматически присваивалось значение square,
// а sides для свойства автоматически устанавливалось значение 4. Поэтому при вызове конструктора вам нужно просто предоставить свойство sideLength.
// 3) Создайте экземпляр класса Square, вызываемого square с соответствующими значениями свойств,
// и вызовите его методы calcPerimeter() и calcArea(), чтобы показать, что он работает нормально.

class Square extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength);
  }
  calcArea() {
    console.log(
      `The area of the square equals ${this.sideLength * this.sideLength}.`
    );
  }
}

let square1 = new Square(7);
square1.calcPerimeter(); // 28
square1.calcArea(); // 49

// Задачи codewars.com

// https://www.codewars.com/kata/55a144eff5124e546400005a

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get info() {
    return `${this.name}s age is ${this.age}`;
  }
}

// https://www.codewars.com/kata/56f7f8215d7c12c0e7000b19

class Person {
  constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }
  sayFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
}

// https://www.codewars.com/kata/56ff9b53140fcca90b000530

class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, "Labrador", "Large", master, true);
  }
}
