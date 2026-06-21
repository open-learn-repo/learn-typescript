/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable ts/no-unsafe-declaration-merging */
// * 索引签名
// 索引签名的第一个作用: 限制属性值的类型,并且帮助Typescript去推断这个类型
interface T {
  [key: string | number]: string | number;
}

type X = Omit<T, never>;
// 索引签名的第二个作用: 支持数组的下标存取
let n!: string;
let m!: T;
for (let n in m) {
  console.log(m[n]);
}

// 示例: 限制类的属性名
interface M {
  [key: string]: string | number;
}
class M implements M {
  static [key: string]: boolean;

  a = 1;
  static x = false;

  constructor() {}
}

// 如果类实现的不是同名的接口名, 那么需要重复声明一次兼容T的类型！
class N implements T {
  [key: string | number]: any;

  static [key: string]: boolean;

  a = 1;
  static x = false;

  constructor() {}
}

// * 数组和元组
type Arr1 = string[];
type Arr2 = Array<string>;
type InferArr = Omit<Arr1, never>; // 这里可以看到string[]是一个兼容索引为数字，值类型为string的索引签名的类型

type Tuple = [string, number];
type InferTuple = Omit<Tuple, never>;
interface LikeTuple extends Array<string | number> {
  readonly length: 2;
  0: string;
  1: number;
}
// 上面这两个类型是一样的，由此可以判断: 元组的长度是定长的,每个数组索引位置被提前定义好类型的特殊数组
let t1!: Tuple, t2!: LikeTuple;
t1 = t2;
t2 = t1;
// 元组出现的主要意义在于: 在TypeScript中所有函数的参数都被理解为元组类型
function foo(a: string, b: string): void {}
type TFooArgs = [a: string, b: string];
/**
 * 总结:
 * 1. 索引签名只有一种写法，可以用于对象、接口和类类型，并且只对三种基本类型有意义
 * 2. 数组和元组都是在对象的索引签名上做文章
 * 3. 只读数组和类数组（课后）
 */
