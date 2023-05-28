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
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));
// const myProfile = {
//   name: "たいち",
//   age: 26
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

//分割代入の書き方
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

//const myProfile = ["たいち", 26];

// //分割代入の書き方,オブジェクトの時
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// //配列で分割代入
// //抜き出す配列と同じ順番で抜き出す
// const [name, age] = myProfile;
// const message4 = `名前は${name}で～す！。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値、引数
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello();

/**
 * スプレッド構文 ...(ドット三つ)

 */

//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1); //...を付けると配列の中身を展開してくれる

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// //sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//一つにまとめる場合
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

//スプレッド構文...で結合すると、
//元の配列が勝手に影響受けたりしない
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5]; //配列arr4とarr5を結合
// console.log(arr7);

// 配列 = 配列だと同じ場所を参照するため、
//arr8に変更を加えると、元の配列arr4にも影響が出る
//不具合の元になる
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

/**（配列を処理する関数）
 *　　 mapやfilter　　を使った配列の処理
 */
const nameArr = ["多賀", "多だ", "たいち"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

//returnされた結果に基づいて
//mapで新しい配列を生成する場合
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

//for文より短く書ける
//ループ処理にmapを使う場合
//用途に合わせて引数を増やして使う
//nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

//filter
//配列に対してある条件に一致したものだけ返却して
//新しい配列を生成する

//偶数だけ取り出す
// const numArr = [1, 2, 3, 4, 5];
// const newnumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newnumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "たいち") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr)

/**
 * 三項演算子
 */
//ある条件 ? 条件がtrueの時に?以降が : 条件がfalseの時コロン以降が返される
// const val1 = 1 < 0 ? "tureです" : "falseです";
// console.log(val1);

// const num = "1300";
// //console.log(num.toLocaleString()); //toLocaleString()数値を3桁でカンマ区切り

// //typeof　変数の型判定
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力して下さい";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 >= 100 ? "100以上です" : "許容範囲です";
// };
// console.log(checkSum(50, 49));

/**
 * 論理演算子の本当の意味を知ろう
 */
// const flag1 = false;
// const flag2 = false;

// // || は左右どっちかがtrueなら動く
// if (flag1 || flag2) {
//   console.log("１か２はtrueになります");
// } else {
//   console.log("どっちもfalse");
// }

//　&& if文は左側がtrueで右もtrueの時始めてif文内の処理が動く
//     どっちかがfalseならif文がfalse判定なので処理が動かない
// if (flag1 && flag2) {
//   console.log("１も２もtrueになります");
// }

// || は　左側がfalseとなるとき右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// // && は　左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && `${num2}が設定されました`;
// console.log(fee2);
