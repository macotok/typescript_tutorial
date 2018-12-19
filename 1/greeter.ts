// ことはじめ
function greeter(person: string) {
  return "Hello, " + person;
}
var user = "Jane User";
document.body.innerHTML = greeter(user);

// 配列の型注釈
function doubleAll(arr: number[]): number[] {
  return arr.map(n => n * 2);
}

doubleAll([1, 2, 3]);

// オブジェクトの型推論
const user2 = {
  name: '佐藤',
  id: 'taro123',
}

// オブジェクトの型注釈
function getLabel(user3: {name: string; id: string}): string {
  return `${user3.name}@{user3.id}`;
}

const user3 = {
  name: '鈴木',
  id: 'ichiro123',
}
getLabel(user3);

// 関数の型注釈
let add: (a: number, b: number) => number;
add = (a, b) => {
  return a + b;
};
add(2, 3);

// any型
let v: any;

v = 1;
v = 'a';
v = true;

// 型注釈を付けた方がいい理由
function calculatedTime(hour: number, expr: boolean): string {
  if (expr)  {
    return hour + 'h';
  }
  return hour + 'h';
}
calculatedTime(1, true);
