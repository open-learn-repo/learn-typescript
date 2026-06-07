// * example1: 接口联合类型，成员有相同部分
interface Bird {
  weight: number;
  leg: number;
  wings: number;
}
interface Horse {
  weight: number;
  leg: number;
  id: string;
}
type T = Bird | Horse;
type Animal = Omit<T, never>; // 相当于克隆, 是 Bird | Horse 的父类

let bird!: Bird;
let horse!: Horse;

let x1: Bird | Horse = bird;
let x2: T = bird;
let x3: Animal = bird;

// * example2: 接口联合类型, weight成员类型不同
interface Bird1 {
  weight: string;
  leg: number;
  wings: number;
}
interface Horse1 {
  weight: number;
  leg: number;
  id: string;
}
type T1 = Bird1 | Horse1;
type Animal1 = Omit<T1, never>; // 相当于克隆, 是 Bird | Horse 的父类

let bird1!: Bird1;
let horse1!: Horse1;

let y1: Bird1 | Horse1 = bird1;
let y2: T1 = bird1;
let y3: Animal1 = bird1;

// * example3: 接口交叉类型, 成员有不同部分
interface Bird2 {
  weight: number;
  leg: number;
  wings: number;
}
interface Horse2 {
  weight: number;
  leg: number;
  id: string;
}
type T2 = Bird2 & Horse2;
type BirdAndHorse = Omit<T2, never>; // 相当于克隆, 是 Bird | Horse 的父类

class M1 implements Bird2, Horse2 {
  weight!: number;
  leg!: number;
  wings!: number;
  id!: string;
}
class M2 implements T2 {
  weight!: number;
  leg!: number;
  wings!: number;
  id!: string;
}
class M3 implements BirdAndHorse {
  weight!: number;
  leg!: number;
  wings!: number;
  id!: string;
}

// * example4: 接口交叉类型, 同一个成员的类型不同
interface Bird3 {
  weight: string;
  leg: number;
  wings: number;
}
interface Horse3 {
  weight: number;
  leg: number;
  id: string;
}
type T3 = Bird3 & Horse3;
type BirdAndHorse1 = Omit<T3, never>; // 相当于克隆, 是 Bird | Horse 的父类

class N1 implements Bird3, Horse3 {
  weight!: never;
  leg!: number;
  wings!: number;
  id!: string;
}
class N2 implements T3 {
  weight!: never;
  leg!: number;
  wings!: number;
  id!: string;
}
class N3 implements BirdAndHorse1 {
  weight!: never;
  leg!: number;
  wings!: number;
  id!: string;
}
