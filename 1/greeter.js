function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
document.body.innerHTML = greeter(user);
function doubleAll(arr) {
    return arr.map(function (n) { return n * 2; });
}
doubleAll([1, 2, 3]);
