# TypeScript

## TypeScriptとは

- マイクロソフトによって開発されたプログラミング言語
- TypeScriptで書かれたコードはJavaScriptのコードに変換される
- コンパイルするためのソフトウェアをtscという
- 文字列型、数値型、boolead型などのデータの型を備えている。変数や関数の引数、戻り値などのあらゆる値についてプログラム実行前に型を決める静的型付け言語
- プログラム実行時まで型が決まらない言語を動的型付け言語(JavaScript)
- TypeScriptやCoffeeScriptなどのJavaScriptにコンパイル言語をAltJSと総称される
- AltJSやBabelを使う理由のひとつに同じJavaScriptでもブラウザごとに使える構文が揃っていないため
- すべてのJavaScriptはいっさい書き換えることなくTypeScriptのコードとして振る舞うことができる(スーパーセット)。よって段階的に静的型付けを導入することができる。
- Googleの社内標準言語

### 静的型付け言語の利点

- 変数名のtypo、値の消し忘れ、記述のミスを自動的にコンパイルエラーとして落とす
- 上記のようなミスを自動テストによって防ぐ必要がなくなる

## 書き方とコマンド

ファイルの拡張子は```.ts```
型注釈は```: string```

```javascript: greeter.ts
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

```javascript: greeter.ts
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

## 参考サイト

- [TypeScriptことはじめ](https://app.codegrid.net/series/2017-typescript)
