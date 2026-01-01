Phần 1: Khai báo biến và console.log() cơ bản
1.1
let name = "Le";
let age = 20;
const isStudent = true;
console.log("Name " + name);
console.log("Age " + age);
console.log("Is student " + isStudent);
1.2
let a = 5;
let b = 10;
a = 2;
b = 3;
console.log(a);
console.log(b);


Phần 2 const, let, var
Const khác let ở chỗ const ko gán lại giá trị còn let thì có. Nên dùng const khi giá trị ko bị thay đổi bất ngờ.
Đoạn code này sai? Giải thích: vì đã khai báo const x = 10; và const thì ko gán lại được giá trị


Phần 3 Data type
Xác định kiểu dữ liệu:
100 là number
100 là number
TRUE là boolean
[1, 2, 3] là array
{ name:"An", age:20} là object (riêng phần "An" là string)
null là kiểu rỗng
undefined là biến đã khai báo nhưng chưa gán giá trị

Tạo một object student gồm: name age scores
const student = {name: "Le Khiem Ha", age: 32, scores: [10, 20, 30]}
console.log(student)


Phần 4 Ép kiểu type casting
Convert string "1000" -> number
let numStr = "1000";
let convertedNum = Number(numStr);
console.log("--- Exercise 1 ---");
console.log("Value:", convertedNum);
console.log("Data Type:", typeof convertedNum;

Convert number 1000 -> string
let oriNum = 1000;
let numStr = String(oriNum);
console.log("\n--- Exercise 2 ---");
console.log("Value:", numStr);
console.log("Data Type:", typeof numStr);

Convert boolean true -> string
let isSuccess = true;
let boolStr = String(isSuccess);
console.log("\n--- Exercise 3 ---");
console.log("Value:", boolStr);
console.log("Data Type:", typeof boolStr);

Phần 5 Dự đoán kết quả (true / false):
Boolean(0) - false
Boolean(1) - true
Boolean("") - false
Boolean("hello") - true
Boolean(null) - false
Boolean([]) - true

Phần 6 Array & bộ nhớ (liên hệ sơ đồ RAM)
Cho mảng:
    const numbers = [4, 3, 1, 5, 1];
In phần tử đầu tiên: console.log(numbers[0])
In phần tử cuối cùng console.log(numbers[4])

Giải thích bằng lời (không cần code):
Vì sao khi gán:
    const a = numbers; thì a và numbers lại liên quan đến cùng một vùng nhớ?
Vì cả hai đang cùng chia sẻ một vùng nhớ, biến a nhận được địa chỉ vùng nhớ mà numbers đang trỏ tới