// プロパティの型を定義
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
// 引数プロパティ宣言
var Person2 = /** @class */ (function () {
    function Person2(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person2;
}());
// インスタンスメソッド
var Person3 = /** @class */ (function () {
    function Person3(name, age) {
        this.name = name;
        this.age = age;
    }
    Person3.prototype.say = function () {
        return "Hello, I'm " + this.name + ".";
    };
    return Person3;
}());
var person = new Person3('Bob', 36);
console.log(person.say());
