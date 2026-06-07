* 联合会合并子类型
  > 合并的终点是 any
* 交叉会向子类型收敛
  > 交叉类型并不常用于基础类型。交叉收敛到子类型，如果没有父子类型关系，收敛到never。
* void & undefined 是特殊处理的
  > 由于在JavaScript中function中返回undefined和没有返回等同于void，所以在TypeScript中void和undefined是兼容的
