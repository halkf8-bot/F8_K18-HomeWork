export class Student {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    receive(message: string) {
        console.log(`${message} Học sinh ${this.name} nhận được`);
    }
}