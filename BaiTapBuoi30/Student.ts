export interface ObserverI {
    receive(message: string): void
}
export class Student implements ObserverI {
    private name: string
    constructor(name: string) {
        this.name = name
    }
    receive(message: string) {
        console.log(`${message} Học sinh ${this.name} nhận được`)
    }
}