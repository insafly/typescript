// создаем некий тип, который нужен для объектов или классов, используется только на этапе разработки, указывает поля, функции, элементы, которые будут тут использоваться (не компилируются)

interface Rect {
  readonly id: string
  color?: string // not required
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: '123',
  size: {
    width: 10,
    height: 10,
  },
  color: 'rot',
}

const rect2: Rect = {
  id: '123',
  size: {
    width: 10,
    height: 10,
  },
}
// rect1.id = '7878'; // error
rect2.color = 'gelb'

const rect3 = {} as Rect
const rect4 = <Rect>{} // old way

// наследование интерфейсов

interface RectWithArea extends Rect {
  getArea: () => {}
}

const rect5 = {
  id: '78',
  size: {
    width: 10,
    height: 20,
  },
  getArea(): number{
    return this.size.width * this.size.height;
  },
}

// взаимодействие интерфейса и класса
interface IClock {
  time: Date
  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date()

  setTime(date: Date): void {
    this.time = date
  }
}

// интерфейс для объектов с большим количеством динамических ключей
interface Styles {
  [key: string]: string
}

const css: Styles= {
  border: '1px solid red',
  margin: '10px',
}