import {ObserverI} from "./Student"
export interface SubjectI {
    addStudent (student: ObserverI): void
    removeStudent (student: ObserverI): void
    notify (message: string): void
}
export class Classroom implements SubjectI{
    private name: string
    private students: ObserverI[] = []
    constructor(name: string) {
        this.name = name
    }
    addStudent(student: ObserverI) {
        this.students.push(student)
    }
    removeStudent (student: ObserverI) {
        const index = this.students.indexOf(student)
        if (index !== -1) {
            this.students.splice(index, 1)
        }
    }
    notify(message: string) {
        this.students.forEach((student) => {
            student.receive(message)
        })
    }
    postAnnouncement(message: string) {
        console.log(`[Lớp ${this.name}] Thông báo mới:`)
        this.notify(message)
    }
}