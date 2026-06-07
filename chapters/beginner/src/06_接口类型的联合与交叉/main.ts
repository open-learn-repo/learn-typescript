// 看下 ../../static/06_image_01.png
// * 接口的联合的结果是求取它们的公共的成员, 所有成员联合的结果是它们更抽象的联合的结果
// ? 详情例子可以参考 ./example.ts: example1
interface Animal {
  weight: number;
  leg: number;
}
interface Bird extends Animal {
  wings: number;
}
interface Horse extends Animal {
  id: string;
}
type T = Bird | Horse;
// type Animal = Omit<T, never> // 相当于克隆, 是 Bird | Horse 的父类

let bird!: Bird;
let horse!: Horse;

let x1: Bird | Horse = bird;
let x2: T = bird;
let x3: Animal = bird;
// ? 详情例子可以参考 ./example.ts: example2
interface Animal1 {
  weight: string | number;
  leg: number;
}
interface Bird1 extends Animal1 {
  weight: string;
  wings: number;
}
interface Horse1 extends Animal1 {
  weight: number;
  id: string;
}
type T1 = Bird1 | Horse1;
// type Animal1 = Omit<T1, never>; // 相当于克隆, 是 Bird | Horse 的父类

let bird1!: Bird1;
let horse1!: Horse1;

let y1: Bird1 | Horse1 = bird1;
let y2: T1 = bird1;
let y3: Animal1 = bird1;
