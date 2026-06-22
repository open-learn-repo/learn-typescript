/* eslint-disable ts/no-unsafe-declaration-merging */
interface Axis { // interface
  x: number;
  y: number;
}

class Axis { // interface and value
  constructor(public x: number, public y: number) {}

  distance(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

type A = Omit<Axis, never>;
