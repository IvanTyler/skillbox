interface Rect {
   readonly id: string
   color?: string
   size: {
       width: number
       heigth: number
   }
}

const rect1: Rect = {
    id: 'hello',
    size: {
        width: 20,
        heigth: 30,
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: 'good nigth',
    size: {
        width: 40,
        heigth: 40,
    }
}

rect2.color = 'red'

const rect3 = {} as Rect // строгое приведение типа
const rect4 = <Rect>{} // альтернативная запись

// Наследование интерфейса

interface RectWidthArea extends Rect {
    getArea: () => number
}

const rect5: RectWidthArea = {
    id: 'good morning',
    size: {
        width: 400,
        heigth: 400,
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

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

// =============== типо ко множеству ключей

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px',
}

