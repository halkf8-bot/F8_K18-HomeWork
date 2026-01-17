// const number = [0, 2, 3, 4];
// let i = 0;
// while (i < number.length) {
//     console.log(number[i]);
//     i++;
// }

// const a = []
// a.push(1)
// a.push(2)
// a.push(3)
// a.pop()
// a.shift()
// a.unshift(0)
// console.log(a)
//
// const a = [1, 4, 6, 9]
// const b = [2, 3, 4, 5, 8]

/*
* merge a and b to sortedNumbers
* ex sortedNumbers = [1, 2, 3, 4, 4, 5, 6, 8, 9]
* */

// const a = [1, 4, 6, 9];
// const b = [2, 3, 4, 5, 8];
// const sortedNumbers = [];
// let i = 0;
// let j = 0;
// while (i < a.length && j < b.length) {
//     if (a[i] < b[j]) {
//         sortedNumbers.push(a[i]);
//         i++;
//     } else {
//         sortedNumbers.push(b[j]);
//         j++;
//     }
// }
// console.log(sortedNumbers);

let i: number = 0, j: number = 0;
const sortedNumbers: any[] = [];

while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
        sortedNumbers.push(a[i]);
        i++;
    }
    else {
        sortedNumbers.push(b[j]);
        j++;
    }
}

// Thêm các phần tử còn sót lại của mảng a (nếu có)
for (let idx: number = i; idx < a.length; idx++) {
    sortedNumbers.push(a[idx]);
}
// Thêm các phần tử còn sót lại của mảng b (nếu có)
for (let idx: number = j; idx < b.length; idx++) {
    sortedNumbers.push(b[idx]);
}
console.log(sortedNumbers);