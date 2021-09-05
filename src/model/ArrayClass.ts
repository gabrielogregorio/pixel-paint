export default class ArrayClass{
  list: string[][]

  constructor(list) {
    this.list = list
  }

  push(item: string, line: number, col: number): ArrayClass {
    this.list[line][col] = item
    return new ArrayClass(this.list)
  }

  updatePosition(line: number, col: number, newValue: string): ArrayClass{
    this.list[line][col] = newValue
    return new ArrayClass(this.list)
  }

  getAll(): string[][] {
    return this.list
  }

  getLine(line: number): string[] {
    return this.list[line]
  }

  getPosition(line: number, col: number, ): string {
    return this.list[line][col]
  }
}
