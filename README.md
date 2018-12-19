# TypeScript

## TypeScriptとは

- マイクロソフトによって開発されたプログラミング言語
- TypeScriptで書かれたコードはJavaScriptのコードに変換される
- コンパイルするためのソフトウェアをtscという
- 文字列型、数値型、boolead型などのデータの型を備えている。変数や関数の引数、戻り値などのあらゆる値についてプログラム実行前に型を決める静的型付け言語
- プログラム実行時まで型が決まらない言語を動的型付け言語(JavaScript)
- TypeScriptやCoffeeScriptなどのJavaScriptにコンパイル言語をAltJSと総称される
- AltJSやBabelを使う理由のひとつに同じJavaScriptでもブラウザごとに使える構文が揃っていないため
- すべてのJavaScriptはいっさい書き換えることなくTypeScriptのコードとして振る舞うことができる(スーパーセット)。よって段階的に静的型付けを導入することができる
- Googleの社内標準言語

### 静的型付け言語の利点

- 変数名のtypo、値の消し忘れ、記述のミスを自動的にコンパイルエラーとして落とす
- 上記のようなミスを自動テストによって防ぐ必要がなくなる

## ことはじめ

ファイルの拡張子は```.ts```
型注釈は```: string```

``` javascript: greeter.ts
function greeter(person: string) {
  return "Hello, " + person;
}
var user = "Jane User";
document.body.innerHTML = greeter(user);
```

コンパイル実行

``` terminal:command
$ tsc greeter.ts
```

型注釈でエラーになった場合、terminalでエラー分が表示される

``` javascript: greeter.ts
function greeter(person: string) {
  return "Hello, " + person;
}
var user = [0, 1, 2];
document.body.innerHTML = greeter(user);
```

コンパイル実行

``` terminal:command
$ tsc greeter.ts

greeter.ts:5:35 - error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.

5 document.body.innerHTML = greeter(user);
```

## 型注釈と型推論

### 型注釈の書き方

ある変数について、その変数がどういう型を受け入れるかを指定する
※型注釈の先頭を大文字にするのは禁止(String、Number、Boolean)

#### 変数

```
let str: string;
str = '文字列';

let num: number;
num = 123;

let bool: boolean;
bool = true;
```

#### 引数/関数の戻り値

型注釈は変数だけでなく、引数やプロパティでも同様に書くことができる


``` javascript
function add(a: number, b: number): number {
  return a + b;
}
```

- ```a: number, b:number```は引数の型注釈
- ```): number {```は関数の戻り値の型注釈

#### 配列

型注釈の書き方は```配列の中身の型 + []```

``` javascript
function doubleAll(arr: number[]): number[] {
  return arr.map(n => n * 2);
}

doubleAll([1, 2, 3]);
```

#### オブジェクト

オブジェクトの型注釈の区切りは```;```になる

``` javascript
function getLabel(user: {name: string; id: string}): string {
  return `${user.name}@{user.id}`;
}

const user = {
  name: '鈴木',
  id: 'ichiro123',
}
getLabel(user);
```

#### 関数型

``` javascript
let add: (a: number, b: number) => number;
add = (a, b) => {
  return a + b;
};
add(2, 3);
```

### any型

1つの関数が複数の型を返す場合を```any型```という
any型はコンパイルをすり抜けてエラー検出されないので基本的には使わないようにする

``` javascript
let v: any;

v = 1;
v = 'a';
v = true;
```


### 型推論とは

型推論を使えば型注釈を毎回すべてに書く必要がなくなる

``` javascript
let str = '文字列';
str = 1;
// error TS2322: Type '1' is not assignable to type 'string'.
```

変数宣言で```str```にstring型が格納されたので「変数strはstring型である」と推論されます
この機能を型推論と呼びます
その値にnumber型を格納しようとするとエラーになる

#### オブジェクト

存在しないプロバティはエラーになる

``` javascript
const user = {
  name: '佐藤',
  id: 'taro123',
}
user.address = 'aaa@bb.com';

greeter.ts:20:7 - error TS2339: Property 'address' does not exist on type '{ name: string; id: string; }'.
```

型推論の時点で型が確定するため違う型を格納しようとするとエラーになる

``` javascript
const user = {
  name: '佐藤',
  id: 'taro123',
}
user.name = 123;

greeter.ts:20:1 - error TS2322: Type '123' is not assignable to type 'string'.
```

#### 配列

``` javascript
const array = [0, 1, 2];
array.map(v => v * 2);
```

## 型注釈を書いた方がいい理由

修正やリファクタリングをするとき型注釈を書いてるとミスを防げる

``` javascript
function calculatedTime(hour: number): string {
  return hour + 'h';
}
calculatedTime(1);
```

新たにif分岐を追加して戻り値を設定したとき、型が違ってエラーが出力される

``` javascript
function calculatedTime(hour: number, expr: boolean): string {
  if (expr)  {
    return hour;
  }
  return hour + 'h';
}
calculatedTime(1, true);

 error TS2322: Type 'number' is not assignable to type 'string'.
```

## 参考サイト

- [TypeScriptことはじめ](https://app.codegrid.net/series/2017-typescript)
