/* eslint-disable ts/method-signature-style */
/* eslint-disable ts/explicit-function-return-type */
// 三种重名的处理策略: 合并, 重载, 覆盖

// 合并
// 合并接口
interface IMyObject {
  f(a: string): void;
  x: string;
}

interface IMyObject {
  f(b: number): void;
  y: number;
}

// 重载, 普通函数是可以被重载的, 类的方法是能够重载的, 接口的方法也是可以重载的
function foo(a: number): void;
function foo(a: string): void;
function foo() {}

class MyClass {
  constructor(args: number);
  constructor(args: number[]);
  constructor() {}

  foo(a: number): void;
  foo(a: string): void;
  foo() {

  }
}

interface Foo {
  f(a: string): void;
  f(b: number): void;
}
// 覆盖, 比较特殊, 只用于类继承关系中子类跟父类之间的同名的声明
class Parent {
  name() {
    return "parent";
  }
}

class MySelf extends Parent {
  override name() {
    return "self";
  }
}
