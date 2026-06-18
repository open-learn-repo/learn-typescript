/* eslint-disable ts/method-signature-style */
/* eslint-disable ts/explicit-function-return-type */
/* eslint-disable ts/no-unsafe-declaration-merging */
/* eslint-disable style/semi */
/* eslint-disable ts/consistent-type-definitions */

// 接口类型
interface Bird {
  weight: number;
  leg: number;
  wings: number;
}
// 类类型
class MyClass {
  // 这里可以把 Bird 接口的成员复制过来用
  weight!: number;
  leg!: number;
  wings!: number;
}
let x = new MyClass();
// T1和T2 的成员是一样的
type T1 = Omit<Bird, never>;
type T2 = Omit<MyClass, never>;
// 对象类型
type T3 = {
  id: string;
  name: "张三";
  age: 25;
}
type T4 = Omit<T3, never>
// 不太常用的用法，取一个对象实例的类型
let x2 = {
  id: "string",
  name: "张三",
  age: 25,
}
// 对象类型
type T5 = typeof x2;

// ../../static/08_image_01.png
// 1. interface可以被extends继承，type 类型别名是无法使用extends的
// 2. 在对象的实例声明（typeof xxx）中不能支持可选属性等5种语法
// 3. interface 可以声明两次以上，声明的接口会被合并，而 type 是无法重复声明的

// 类实现接口：类必须“兑现”接口里作出的所有承诺。
interface Horse {
  weight: number;
  leg: number;
  id: string;
}
type BirdAndHorse = Bird & Horse;
// 类实现多个接口时，等价于实现多个接口之间的交叉，所以下面 M1 和 M2 是等价的
class M1 implements Bird, Horse {
  weight!: number;
  leg!: number;
  wings!: number;
  id!: string;
}
class M2 implements BirdAndHorse {
  weight!: number;
  leg!: number;
  wings!: number;
  id!: string;
}

type Animal = Omit<Bird | Horse, never>
class M3 implements Animal {
  weight!: number;
  leg!: number;
}

class M4 extends M3 implements BirdAndHorse {
  wings!: number;
  id!: string;
}
/**
 * 类隐式地实现类一个与它同名的接口
 * TypeScript可以在M5这个类上的原型添加属性或者方法(只允许同名类的接口,在类声明体之外被声明)
 */
interface M5 {
  x?: string;
}
class M5 implements M5 {
  weight!: number;
  leg!: number;
  id!: string;
}
M5.prototype.x = "hi";

// 类的重载
interface IFoo {
  foo(s: string): void;
  foo(n: number): void;
  foo(): void;
}
class M6 implements IFoo {
  foo() {}
}
class M7 {
  foo() {}
}
const m6 = new M6(); // M6与IFoo是子类型兼容的(继承关系)
const m7: IFoo = new M7(); // M7与IFoo是结构兼容的

// ? 总结
// 1.类隐式地实现类一个与它同名的接口
// 该接口被声明为MyClass,prototype的类型；
// 该接口可以被重复声明，且用户声明的成员不强制要求在类声明块中实现。
// 2.在TypeScript中可以使用基于接口的多重继承
// 可以使用交叉和联合来辅助设计类继承树
// 可以在构造方法中返回定制的对象（但必须是MyClass的实例)
// 3.在不能使用基于extends或implements的继承兼容时，接口、类、对象等结构类型之间将使用结构兼容检查。
