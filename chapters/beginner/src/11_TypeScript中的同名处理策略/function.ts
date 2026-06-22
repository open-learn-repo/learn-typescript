/* eslint-disable ts/explicit-function-return-type */
/**
 * 函数是有值的, 可能会有命名空间
 * 有命名空间的情况: 直接存取或者直接声明了函数上面的属性名
 */

// 一个普通的函数
function foo() {}
// 一个有命名空间的函数, 鼠标可以悬浮在 getTime 函数看一下(module和namespace是同一回事)
function getTime() {}
getTime.unit = "hour";
