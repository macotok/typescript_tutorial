function greeter(person: string) {
  return "Hello, " + person;
}
var user = "Jane User";
document.body.innerHTML = greeter(user);

function doubleAll(arr: number[]): number[] {
  return arr.map(n => n * 2);
}

doubleAll([1, 2, 3]);
