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
// 型推論オブジェクト
var user2 = {
    name: '佐藤',
    id: 'taro123'
};
// 型注釈オブジェクト
function getLabel(user3) {
    return user3.name + "@{user3.id}";
}
var user3 = {
    name: '鈴木',
    id: 'ichiro123'
};
getLabel(user3);
