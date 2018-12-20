var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// 継承
var Person4 = /** @class */ (function () {
    function Person4(name, age) {
        this.name = name;
        this.age = age;
    }
    Person4.prototype.say = function () {
        return "Hello, I'm " + this.name + ".";
    };
    return Person4;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, location) {
        var _this = _super.call(this, name, age) || this;
        _this.name = name;
        _this.age = age;
        _this.location = location;
        return _this;
    }
    return Employee;
}(Person4));
// 継承サブクラスの扱い
var Person5 = /** @class */ (function () {
    function Person5(name, age) {
        this.name = name;
        this.age = age;
    }
    Person5.prototype.say = function () {
        return "Hello, I'm " + this.name + ".";
    };
    return Person5;
}());
function getCardLabel(person) {
    return "[" + person.name + " (" + person.age + ")]";
}
var Employee2 = /** @class */ (function (_super) {
    __extends(Employee2, _super);
    function Employee2(name, age, location) {
        var _this = _super.call(this, name, age) || this;
        _this.name = name;
        _this.age = age;
        _this.location = location;
        return _this;
    }
    return Employee2;
}(Person5));
var person5 = new Person5('Bob', 36);
console.log(getCardLabel(person5)); // [Bob (36)]
var employee2 = new Employee2('Tom', 32, 'Japan');
console.log(getCardLabel(employee2)); // [Tom (32)]
