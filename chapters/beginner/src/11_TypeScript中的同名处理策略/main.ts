/* eslint-disable ts/no-namespace */
/* eslint-disable ts/no-unsafe-declaration-merging */
/* eslint-disable prefer-const */
// 全景图可以查看 ../../static/11_image_01.png

// 合并，重载，覆盖的示例，可以查看 ./merging.ts

// 命名空间的同名策略，可以查看 ./namespace.ts

// 类的同名策略，可以查看 ./class.ts

// 枚举的同名策略暂时不讲

// 函数的同名策略，可以查看 ./function.ts

// 命名空间, 类型, 值是不同的域的,所以可以重复声明同一个名字
// 示例: 导入
import type { Stream as StreamType } from "node:stream"; // interface or type
import stream from "node:stream"; // namespace

let Stream = stream.Stream; // class

const s: StreamType = new Stream();

// 示例: 定义
interface MyClass {}

class MyClass implements MyClass {
  constructor() {}
}

namespace MyClass {}

export default MyClass;
