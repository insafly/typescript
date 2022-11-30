function add(a: number, b: number): number {
  return a + b
}

function toUpperCase(s: string): string {
  return s.trim().toLocaleUpperCase();
}

// перегрузка функции (вызов с разными значениями)
interface IMyPosion {
  x: number | undefined
  y: number | undefined
}

interface IMyPosionWithDefault extends IMyPosion {
  default: string
}

function position(): IMyPosion // если нет входящих параметров
function position(a: number): IMyPosionWithDefault // если 1 входящий параметр
function position(a: number, b: number): IMyPosion // если 2 входящих параметра

function position(a?: number, b?: number) {
  if (!a && !b) {
    return { x: undefined, y: undefined }
  }

  if (a && !b) {
    return { x: a, y: undefined, default: a.toString() }
  }

  return { x: a, y: b }
}