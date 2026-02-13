import {ObserverI, Student} from "./Student"
import {Classroom} from "./Classroom"

const cJs: Classroom = new Classroom("Js Cơ Bản")
const ha: ObserverI = new Student("Hà")
const khiem: ObserverI = new Student("Khiêm")

cJs.addStudent(ha)
cJs.addStudent(khiem)
cJs.postAnnouncement("Mai kiểm tra OOP -")
