/* eslint-disable ts/no-redeclare */
/* eslint-disable style/semi */
/* eslint-disable ts/consistent-type-definitions */
/* eslint-disable ts/explicit-function-return-type */

let f1 = function () {};
let f2 = () => {};

function foo() {}

class MyClass {
  constructor() {

  }

  foo() {}
}

// 在JavaScript中，函数可以有多个调用方式，那么每一个调用的方式，在TypeScript中就被作为一个签名
// 如果有多个调用方式的话，可以用重载的方式来声明

// * 函数示例：具名函数
function test(s: string): void;
function test(n: number): void;
function test(...args: any[]): any {

}
test.a = "hi";
test("hi");
// 在TypeScript中，约定了这种具名函数，有且仅有调用签名，而不能被构造

// * 函数示例：箭头函数和声明式函数
interface Fn {
  (s: string): void;
  (n: number): void;
  a?: string;
}
type Fn2 = {
  (s: string): void;
  (n: number): void;
  // 下面是可以添加构造签名的
  // new (): void;
  a?: string;
}
const fn: Fn = (...args: any[]): any => {}; // 箭头函数不能被构造！
const fn2: Fn2 = function () {};

// * 类示例: ES6中的类
class Custom {
  static a: string = "hi";

  constructor(s: string);
  constructor(n: number);
  constructor() {

  }

  foo(s: string): void;
  foo(n: number): void;
  foo() {}
}
let custom_1 = new Custom(10);
// 反过来，像 Custom 这种类，它添加了构造签名，而不能添加它的调用签名

// * 类示例：ES6之前的类
interface BeforeCustom {
  x: number;
}

interface BeforeCustomConstructor {
  new (): BeforeCustom;
  (this: BeforeCustom): void;
  prototype: BeforeCustom;
}

let BeforeCustom = function () {
  this.x = 100;
} as BeforeCustomConstructor

let before = new BeforeCustom();
