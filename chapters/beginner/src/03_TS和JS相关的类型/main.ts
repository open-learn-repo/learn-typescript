/* eslint-disable no-var */
/* eslint-disable style/no-tabs */

/* 类型标注 */

// 基本使用
let x: number = 1;
// 断言语法
let y = 1 as number;

/* 声明方式 */
let x1: number = 1;
const x2: number = 2;
var x3: number = 3;
function foo(): number {
  return 1;
}

class MyClass {}

// import ...

/* 表达式（除了声明语句外，其他都可以看作表达式） */

/* 类型断言
	expression as type
	value as type
 */

/* 原则
	1. 界面上必须清楚标注
	2. 能不标注的地方，那就不要去标注
	3. 能用 const 的地方，尽量用 const
	4. 尽量不使用 as
 */
