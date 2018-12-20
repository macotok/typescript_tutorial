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
