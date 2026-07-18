/* eslint-disable unicorn/prefer-type-error */

// 类型收窄：就是在一定的作用域中，变量的类型比它原有的声明要小
// 情况1：赋值
let s1!: string;
let s2!: number | string;

s2 = "a"; // 当这边变量被赋予某一个值的时候，在接下来的变量的使用中，他的类型会被收窄到某一个在这个作用域中可用的类型
s1 = s2;

// 情况2：类型识别
/**
 * 哪些类型可以进行类型识别？
 * 1. typeof
 * 2. instanceof
 * 3. in
 * 4. ++ &&
 */
// typeof
let s3!: number | string;
if (typeof s3 === "string") {
  // 收窄到 string 类型
  console.log(s3);
}
else {
  // 收窄到 number 类型
  console.log(s3);
}
// instanceof
let s4: any;
class MyClass {}
if (s4 instanceof MyClass) {
  console.log(s4); // 收窄到 MyClass 这个类型
}
// in
let s5 = { a: 1, b: "b" };
if ("k" in s5) {
  console.log(s5); // 类型收窄到 { a: number; b: string; } & Record<"k", unknown>, 类型收窄本质上是一种交叉，会往跟具体的类型走
}

// 类型守护：在代码运行时，通过某种方式设立一个“关卡”，只要变量通过了这个关卡，TypeScript 编译器就会百分之百信任并锁定它在这个分支里的具体类型，起到的作用就是类型收窄
// 下面是类型守护的函数的特定语法
/**
 * 变量 is 类型，这个叫做类型的谓词签名，这个是在分支中会用到（比如：if...else...，switch等）
 * 函数返回为 true 时, 变量会被收窄到指定"类型"
 */
function isString(v: any): v is string {
  return typeof v === "string";
}
let s6 = 1;
if (isString(s6)) {
  console.log(s6); // number & string => never
}
else {
  console.log(s6); // number
}

/**
 * asserts 变量 is 类型，这个叫做类型的断言签名，这个是在顺序中会用到
 * 一定被收窄到指定"类型", 除非函数抛出报错
 */
function assertsIsNumber(v: any): asserts v is number {
  if (!(typeof v === "number")) {
    throw new Error("这不是一个数字!");
  }
}
let s7;
assertsIsNumber(s7);
console.log(s7);
