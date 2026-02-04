import {Student} from "./Student"
import {Classroom} from "./Classroom"

const cJs = new Classroom("Js Cơ Bản")

const ha = new Student("Hà")
const khiem = new Student("Khiêm")

cJs.addStudent(ha)
cJs.addStudent(khiem)

cJs.postAnnouncement("Mai kiểm tra OOP")
