/* eslint-disable ts/no-namespace */
/* eslint-disable ts/no-unsafe-declaration-merging */
/* eslint-disable prefer-const */

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
