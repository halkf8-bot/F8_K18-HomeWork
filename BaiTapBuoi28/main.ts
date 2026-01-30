// Bai 1
interface PartTimeI {
    id: number;
    name: string;
    salary: number;
    hoursWorked: number;
}
const partTime: PartTimeI = {
    id: 2,
    name: "Binh",
    salary: 20,
    hoursWorked: 40
};
const newPartTime: PartTimeI = {
    ...partTime,
    hoursWorked: 45
};

// Bai 2
interface EmployeeI {
    id: number;
    name: string;
    salary: number;
    getSalary(): number;
}
class FullTimeEmployee implements EmployeeI {
    id: number;
    name: string;
    salary: number;

    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    getSalary(): number {
        return this.salary;
    }
}
class PartTimeEmployee implements EmployeeI {
    id: number;
    name: string;
    salary: number;
    hoursWorked: number;

    constructor(id: number, name: string, salary: number, hoursWorked: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.hoursWorked = hoursWorked;
    }

    getSalary(): number {
        return this.salary * this.hoursWorked;
    }
}
function calculateTotalSalary(employees: EmployeeI[]): number {
    let total = 0;
    for (const emp of employees) {
        total += emp.getSalary();
    }

    return total;
}
// Test
// Staff Full-time
const boss = new FullTimeEmployee(1, "Nguyen Van A", 1000);
// Staff Part-time
const khiem = new PartTimeEmployee(2, "Tran Van B", 20, 50);
const staffList: EmployeeI[] = [boss, khiem];
const totalS = calculateTotalSalary(staffList);
console.log(`Lương của ${boss.name}: ${boss.getSalary()}`);
console.log(`Lương của ${khiem.name}: ${khiem.getSalary()}`);
console.log(`Tổng lương công ty: ${totalS}`);
