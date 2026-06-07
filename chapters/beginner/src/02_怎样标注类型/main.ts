function getInputSomething(): string {
  return "1341534";
}

function loadFromDatabase(id: number): void | Record<string, any> {
  if (Number.isNaN(id)) {
    return;
  }

  // .... load from database
  return {
    id,
    name: "张三",
    age: 25,
  };
}

const s = getInputSomething();
const id = Number.parseInt(s);

// @ts-expect-error: 忽略
const { name, age } = loadFromDatabase(id);
console.log(name, age);
