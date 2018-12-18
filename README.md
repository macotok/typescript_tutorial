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

```
let str: string;
str = '文字列';

let num: number;
num = 123;

let bool: boolean;
bool = true;
```

型注釈は変数だけでなく、引数やプロパティでも同様に書くことができる


``` javascript
function add(a: number, b: number): number {
  return a + b;
}
```

- ```a: number, b:number```は引数の型注釈
- ```): number {```は関数の戻り値の型注釈

配列を書く場合

型注釈の書き方は```配列の中身の型 + []```

``` javascript
function doubleAll(arr: number[]): number[] {
  return arr.map(n => n * 2);
}

doubleAll([1, 2, 3]);
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

## 参考サイト

- [TypeScriptことはじめ](https://app.codegrid.net/series/2017-typescript)
