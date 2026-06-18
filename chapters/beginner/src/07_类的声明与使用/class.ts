/* eslint-disable ts/no-unsafe-member-access */
/* eslint-disable ts/explicit-function-return-type */
/* eslint-disable ts/no-unsafe-assignment */
// * es6 中的类语法
// extends ...
class Es6 {
  constructor(val) {
    (this as any).val = val;
  }

  // get/set，async and/or *
  a1() {}
  get a2() { return "a"; }

  static b1() {}
  static get b2() { return "b"; }
  // ...
}

// * 现代类
class Modern {
  // private instance fields, TS 3.8, ES2022
  #a = 10;
  #f1() {}
  get #foo1() {
    return "a";
  }

  // private class fields
  // - Static and instance elements cannot share the same private name
  static #a2 = 10;
  static #foo2() {}

  // public instance fields
  b1 = 100;
  b2 = "a";
  b3 = () => {};

  // public class fields
  static d1 = 100;
  static d2 = "a";
  static d3 = () => {};

  constructor(val) {
    (this as any).val = val;
  }

  // get/set，async and/or *
  c1() {}
  get c2() {
    return 1;
  }

  // class static block, TS 4.4, ES2022
  static {
    const m = "这是一个句子";
    console.log(m);
  }

  // auto-accessor, TS 4.9, ES proposal stage 1
  accessor x = 100;
}
