interface EmployeeI {
    getId: () => number;
    getName: () => string;
    setName: (name: string) => void;
    getSalary: () => number;
    setSalary: (salary: number) => void;
    calculateSalary: () => number;
}

abstract class Employee implements EmployeeI {
    protected id: number;
    protected name: string;
    protected salary: number;
    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.setSalary(salary);
    }
    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }
    getSalary(): number {
        return this.salary;
    }
    setSalary(salary: number): void {
        if (salary <= 0) {
            throw new Error("Lỗi: Lương phải lớn hơn 0");
        }
        this.salary = salary;
    }
    abstract calculateSalary(): number;
}

class Developer extends Employee {
    private overtimeHours: number;
    constructor(id: number, name: string, salary: number, overtimeHours: number) {
        super(id, name, salary);
        this.overtimeHours = overtimeHours;
    }
    calculateSalary(): number {
        return this.salary + (this.overtimeHours * 50000);
    }
}
class Manager extends Employee {
    private teamSize: number;
    constructor(id: number, name: string, salary: number, teamSize: number) {
        super(id, name, salary);
        this.teamSize = teamSize;
    }
    calculateSalary(): number {
        return this.salary + (this.teamSize * 200000);
    }
}

// TEST
const dev: Employee = new Developer(1, "Dev", 10000000, 10);
console.log(`${dev.getName()} - Total salary: ${dev.calculateSalary()}`);

const manager: Employee = new Manager(2, "Ma", 20000000, 5);
console.log(`${manager.getName()} - Total salary: ${manager.calculateSalary()}`);