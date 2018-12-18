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

// 型推論オブジェクト
const user2 = {
  name: '佐藤',
  id: 'taro123',
}

// 型注釈オブジェクト
function getLabel(user3: {name: string; id: string}): string {
  return `${user3.name}@{user3.id}`;
}

const user3 = {
  name: '鈴木',
  id: 'ichiro123',
}
getLabel(user3);
