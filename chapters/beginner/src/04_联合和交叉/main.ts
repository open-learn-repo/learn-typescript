// 联合类型：这里会向父类型方向去合并(发散)（更抽象）
let s: "a" | "b" | string = ""; // let s: string
// 交叉类型：这里会向子类型方向去收敛（更具体）
let x: "a" & string; // let x: "a"

// void 和 undefined 是兼容的
function foo(): void {
  return undefined;
}
