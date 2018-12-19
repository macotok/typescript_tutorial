// ことはじめ
function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
document.body.innerHTML = greeter(user);
// 配列の型注釈
function doubleAll(arr) {
    return arr.map(function (n) { return n * 2; });
}
doubleAll([1, 2, 3]);
// オブジェクトの型推論
var user2 = {
    name: '佐藤',
    id: 'taro123'
};
// オブジェクトの型注釈
function getLabel(user3) {
    return user3.name + "@{user3.id}";
}
var user3 = {
    name: '鈴木',
    id: 'ichiro123'
};
getLabel(user3);
// 関数の型注釈
var add;
add = function (a, b) {
    return a + b;
};
add(2, 3);
// any型
var v;
v = 1;
v = 'a';
v = true;
// 型注釈を付けた方がいい理由
function calculatedTime(hour, expr) {
    if (expr) {
        return hour + 'h';
    }
    return hour + 'h';
}
calculatedTime(1, true);
