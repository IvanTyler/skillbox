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
//     readonly model: string
//     readonly numberOfWheels: number = 4

//     constructor (theModel: string) {
//         this.model = theModel
//     }
// }

class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {}
}

class Animal {
    protected voice: string = '' // доступны внутри своего класса и в наследуемых классах , вызывается через функцию в наследуемом классе
    public color: string = 'black' // доступен везде

    private go() { // доступен только внутри своего класса
        console.log('Go');
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()


// Абстрактные классы

abstract class Component {
    abstract render(): void
    abstract info(): string

}

class AppComponent extends Component {
    render(): void {
        console.log('Component on render')
    }

    info(): string {
        return 'This is info';
    }
}