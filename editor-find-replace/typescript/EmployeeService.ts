// EmployeeService.ts

import { Employee } from "./employee";

class EmployeeService {
  private employees: Employee[];

  constructor(employees: Employee[]) {
    this.employees = employees;
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  findEmployeeByUsername(username: string): Employee | undefined {
    return this.employees.find((employee) => employee.username === username);
  }

  getAllEmployees(): Employee[] {
    return this.employees;
  }
}

// Example usage
const employees: Employee[] = [
  {
    username: "john.doe1",
    email: "john.doe1@example.com",
    firstname: "John",
    lastname: "Doe",
    role: "Developer",
  },
  {
    username: "jane.doe2",
    email: "jane.doe2@example.com",
    firstname: "Jane",
    lastname: "Doe",
    role: "Designer",
  },
];

const employeeService = new EmployeeService(employees);

employeeService.addEmployee({
  username: "alex.smith3",
  email: "alex.smith3@example.com",
  firstname: "Alex",
  lastname: "Smith",
  role: "Manager",
});

console.log(employeeService.findEmployeeByUsername("john.doe1"));
console.log(employeeService.getAllEmployees());
