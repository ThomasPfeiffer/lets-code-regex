// Employee.ts

// Define an Employee interface
interface Employee {
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  role: string;
}

// Create a class that implements the Employee interface
class EmployeeImpl implements Employee {
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  role: string;

  constructor(
    username: string,
    email: string,
    firstname: string,
    lastname: string,
    role: string
  ) {
    this.username = username;
    this.email = email;
    this.firstname = firstname;
    this.lastname = lastname;
    this.role = role;
  }

  getFullName(): string {
    return `${this.firstname} ${this.lastname}`;
  }

  getRoleDescription(): string {
    return `Role: ${this.role}`;
  }
}

// Create an array of employees
const employees: Employee[] = [
  new EmployeeImpl(
    "john.smith1",
    "john.smith1@example.com",
    "John",
    "Smith",
    "Chief Coffee Maker"
  ),
  new EmployeeImpl(
    "jane.johnson2",
    "jane.johnson2@example.com",
    "Jane",
    "Johnson",
    "Professional Cat Video Watcher"
  ),
  new EmployeeImpl(
    "alex.williams3",
    "alex.williams3@example.com",
    "Alex",
    "Williams",
    "Head of Snacks Department"
  ),
  // Add more employees as needed
];

// Function to print employee details
function printEmployeeDetails(employee: Employee): void {
  console.log(`Username: ${employee.username}`);
  console.log(`Email: ${employee.email}`);
  console.log(`Full Name: ${employee.firstname} ${employee.lastname}`);
  console.log(`Role: ${employee.role}`);
}

// Print details of all employees
employees.forEach(printEmployeeDetails);

// Function to find an employee by username
function findEmployeeByUsername(username: string): Employee | undefined {
  return employees.find((employee) => employee.username === username);
}

// Function to replace an employee's role by username
function replaceEmployeeRole(username: string, newRole: string): void {
  const employee = findEmployeeByUsername(username);
  if (employee) {
    employee.role = newRole;
    console.log(`Role for ${employee.username} updated to ${employee.role}`);
  } else {
    console.log(`Employee with username ${username} not found.`);
  }
}

// Test the replaceEmployeeRole function
replaceEmployeeRole("john.smith1", "Master of All Things Useless");
replaceEmployeeRole("jane.johnson2", "Official Time Waster");
