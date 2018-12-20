// プロパティの型を定義
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// 引数プロパティ宣言
class Person2 {
  constructor(public name: string, public age: number) {
  }
}

// インスタンスメソッド
class Person3 {
  constructor(public name: string, public age: number) {
  }

  say(): string {
    return `Hello, I'm ${this.name}.`;
  }
}

const person = new Person3('Bob', 36);
console.log(person.say());

// 継承
class Person4 {
  constructor(public name: string, public age: number) {
  }
  say(): string {
    return `Hello, I'm ${this.name}.`;
  }
}

class Employee extends Person4 {
  constructor(public name: string, public age: number, public location: string) {
    super(name, age)
  }
}

// 継承サブクラスの扱い
class Person5 {
  constructor(public name: string, public age: number) {
  }
  say(): string {
    return `Hello, I'm ${this.name}.`;
  }
}

function getCardLabel(person: Person): string {
  return `[${person.name} (${person.age})]`
}

class Employee2 extends Person5 {
  constructor(public name: string, public age: number, public location: string) {
    super(name, age)
  }
}

const person5 = new Person5('Bob', 36);
console.log(getCardLabel(person5)); // [Bob (36)]

const employee2 = new Employee2('Tom', 32, 'Japan');
console.log(getCardLabel(employee2)); // [Tom (32)]
