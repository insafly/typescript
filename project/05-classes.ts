class Typescript {
  version: string

  constructor(version: string) {
    this.version = version
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`
  }
}

// class Car {
//   readonly model: string
//   readonly numberOfWheels: number = 4

//   constructor(theModel: string) {
//     this.model = theModel
//   }
// }

// is the same as

class Car {
  readonly numberOfWheels: number = 4

  constructor(readonly model: string) {}
}

// модификаторы классов
class Animal {
  protected voice: string = ''
  public color: string = 'black' // all modificators by default are public
  private go() {
    console.log('Go!')
  }

  constructor() {
    this.go() // available only here , in this class, because it's private
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
  }
}

const cat = new Cat()
cat.setVoice('test')
cat.color
// cat.voice // не доступно, только через метод

// абстрактные классы - не компилируются
// описываются методы, которые должны быть реализованы
abstract class Component {
  abstract render(): void // абстрактные методы
  abstract info(): string
}

class AppComponent extends Component {
  render(): void {
    console.log('Component was rendered')
  }

  info(): string {
    return 'Info string';
  }
}


