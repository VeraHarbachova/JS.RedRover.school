// Задача 1.
// Создайте класс Person и его подкласс Teacher на примере функций Person и  Teacher.

class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last,
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first}.`);
  }
}

let person1 = new Person("Ewa", "Brown", 31, "female", "tennis");
console.log(person1);
person1.greeting();

class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject) {
    super(first, last, age, gender, interests);
    this.subject = subject;
  }

  greeting() {
    let prefix = "";
    if (
      this.gender === "male" ||
      this.gender === "Male" ||
      this.gender === "m" ||
      this.gender === "M"
    ) {
      prefix = "Mr.";
    } else if (
      this.gender === "female" ||
      this.gender === "Female" ||
      this.gender === "f" ||
      this.gender === "F"
    ) {
      prefix = "Mrs.";
    } else {
      prefix = "Mx.";
    }
    console.log(
      `Hello. My name is ${prefix} ${this.name.last} and I teach ${this.subject}.`
    );
  }
}

let teacher1 = new Teacher(
  "John",
  "Batt",
  33,
  "male",
  ["football", "hockey"],
  "astronomy"
);
let teacher2 = new Teacher(
  "Kate",
  "Nilson",
  35,
  "Female",
  ["cooking", "photo"],
  "biology"
);
console.log(teacher1);
teacher1.greeting();
teacher2.greeting();

// Задача 2.
// Создайте класс пользователя User и класс администратора Admin.
// Класс Admin расширяет класс User.
// Класс User имеет общедоступную функцию updatePassword() и частную функцию resetPassword().
// В классе Admin есть общедоступная функция deleteUser().

class User {
  #password;

  constructor(userName, password) {
    this.userName = userName;
    this.#password = password;
  }

  #updatePassword(newPassword) {
    this.#password = newPassword;
  }

  resetPassword(newPassword) {
    this.#updatePassword(newPassword);
    return `Your password has been updated.`;
  }
}

class Admin extends User {
  constructor(userName, password) {
    super(userName, password);
    this.isAdmin = true;
  }

  deleteUser(userToDelete) {
    return `The user ${userToDelete} has been deleted.`;
  }
}

// Тест пройден: данные имени пользователя соответствуют ожидаемым данным.
let user = new User("Emma", "ZRYAK3GSS3wQujr");
console.log(user);
console.log(user.userName);

// Тест пройден: данные администратора соответствуют ожидаемым.
let admin = new Admin("Sarah", "r5tHZE9DUP1SgTB");
console.log(admin);
console.log(admin.userName);

// Тест пройден: пароль является конфиденциальным.
console.log(user.password);
console.log(admin.password);

// User для удаления:
const userToDelete = "Carter";

// Тест пройден: пользователь не может удалить другого пользователя.
// user.deleteUser(userToDelete); // не может удалить

// Тест пройден: администратор может удалить другого пользователя.
console.log(admin.deleteUser(userToDelete));

// Тест пройден: сброс пароля работает должным образом.
console.log(user.resetPassword("newPassword"));
console.log(admin.resetPassword("newPassword"));
