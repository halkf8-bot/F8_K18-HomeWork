import {Student} from "./Student"
export class Classroom {
    name: string
    students: Student[] = []
    constructor(name: string) {
        this.name = name
    }
    addStudent (student: Student) {
        this.students.push(student)
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