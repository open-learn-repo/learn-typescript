/* eslint-disable one-var */
/* eslint-disable no-restricted-syntax */
/* eslint-disable ts/prefer-literal-enum-member */
/* eslint-disable style/quote-props */
// 1. 枚举成员只能是字符串
// 2. 枚举成员的值只能是字符串或者数字
enum X {
  a = 1,
  b = 2,
}

// 枚举既可以作为类型,也可以被当作值
type T = X;
console.log(X, X.a);
let n!: X;

// 枚举类型具有反向映射的功能, 可以获取到枚举成员
console.log(X[X.a]);
console.log(Object.keys(X)); // 获取所有的枚举成员

// 1. 初始时,没有对枚举成员赋值,那么第一个默认为0, Y.a === 0
// 2. 枚举类型具有自增长性, Y.b === 1
// 3. 枚举成员的值可以是字符串也可以是数字, 在一个枚举类型中可以同时存在
// 4. 枚举成员的值可以是一个可以计算的常量值, 意味着 可以是表达式或者变量
enum Y {
  a,
  "b",
  c,
  d = 5,
  e = "aaa",
  f = Number(10),
  g = n,
  h = 2 + 1,
  i,
  j = "a",
  k = 8,
}

// 常量枚举
// 1. 常量枚举不能被直接打印出来,但可以打印成员 (也就是说不存在变量Z)
const enum Z {
  a,
  "b",
  c,
  d = 5,
  e = "aaa",
  // f = Number(10), // 不支持
  // g = n, // 不支持
  h = 2 + 1,
  i,
  j = "a",
  k = 8,
}

// console.log(Z); // 报错
console.log(Z.a); // OK

type T1 = keyof typeof X; // 枚举成员的类型
type T2 = `${X}`; // 枚举成员值的类型

// ! 误区: 定义的值和枚举的值同名不会复用
const Up = 1, Down = 2, Left = 3, Right = 4;
enum Directions {
  Up, // 0
  Down,
  Left,
  Right,
}
console.log(Directions);

// ! 误区: 枚举类型打印出来是一个对象, 使用typeof来获取枚举类型的类型是对象,但实际上在TypeScript中枚举类型就是枚举类型

// 在TypeScript中这个枚举类型是作为联合类型来处理的(最上面的 type T = X; T实际上就是1 | 2)
type T3 = Exclude<Y, Y.a>;
