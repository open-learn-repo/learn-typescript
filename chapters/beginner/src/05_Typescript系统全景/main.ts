/* eslint-disable style/semi */
/* eslint-disable ts/consistent-type-definitions */
// 哪些是基础类型?哪些不是基础类型?所有类型如何有效划分的问题

// 对象类型是可以列举的,所以才有接口类型
let x = {
  id: 123456,
  name: "张三",
  age: 25,
};

for (const key in x) {
  console.log(key);
}

// 函数是可调用的对象
console.log(Function instanceof Object);

// 组合类型是怎么组合的? 看 ../../static/05_image_02.png
type User1 = { // 别名, 1.字面量对象类型（{...}，{}）；2.匿名的接口类型
  id: number;
  name: string;
  age: number;
}
interface User2 { // 接口
  id: number;
  name: string;
  age: number;
}

// 组合类型还有没有其它的组合方式呢? 看 ../../static/05_image_03.png 的关系组合

// 离散的
// 并集: X | Y；交集: X & Y
type T1 = string | "a"; // string
// 顺序的 列表类型
let arr = [1, 2, 3];
console.log(arr[0]);
