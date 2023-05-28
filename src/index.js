/**
 * const,letについて
 * 変数宣言
 */

// var val1 = "var変数コンソール表示";
// console.log(val1);
// //var変数は上書き可能
// val1 = "上書き"
// console.log(val1);

// //varは再宣言可能
// var val1 = "varは再宣言できる";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letも上書き可能
// val2 = "上書き";
// console.log(val2);

// //letは再宣言不可
// let val2 = "let変数を再宣言";

//constは再宣言も上書きもできない
// const val3 = "const";
// console.log(val3);

// //val3 = "上書き";

// const val3 = "再宣言";

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "たいち",
//   age: 25
// };
// val4.name = "taichi";
// val4.addres = "tokyo";
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "たいち";
// const age = 25;

// //私の名前はたいちです。25歳です。
// //従来の書き方
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いた場合,バッククォートを使う
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

//従来の関数
//  function func1(str) {
//    return str;
//  }
const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

//アロー関数
const func2 = (str) => str;
console.log(func2("func2です"));

const func3 = (num1, num2) => num1 + num2;
console.log(func3(10, 20));
