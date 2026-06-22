/* eslint-disable ts/no-namespace */
/**
 * namespace 可以有实体,也可以没有实体
 * 有实体的情况: 有定义类,函数等等JavaScript有的语法
 * 没有实体的情况: 只定义了一些TypeScript特有的语法,如: interface, type 等等
 */

// 没有实体的情况
namespace X {
  interface T1 {
    // ...
    a: string;
    b: number;
  }

  interface T2 {
    b: string;
    c: boolean;
  }

  type M = Omit<T1 | T2, never>;
}

// 有实体的情况
namespace Y {
  interface Y1 {
    x: number;
    y: number;
  }

  export class Axis implements Y1 {
    constructor(public x: number, public y: number) {}

    distance(): number {
      return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
  }
}
