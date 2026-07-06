// Person type
type Person = {
  name: string;
  age: number;
};

// Job type
type Job = {
  position: string;   // e.g., "Manager" or "Developer"
  department: string;
};

// Employee is a combination of Person & Job
type Employee = Person & Job;

function describeEmployee(emp: Employee): string {
  if (emp.position === "Manager") {
    return `${emp.name} is a ${emp.position} in the ${emp.department} department, leading the team.`;
  } else if (emp.position === "Developer") {
    return `${emp.name} is a ${emp.position} in the ${emp.department} department, writing code.`;
  } else {
    return `${emp.name} works as a ${emp.position} in the ${emp.department} department.`;
  }
}

const emp1: Employee = {
  name: "Alice",
  age: 35,
  position: "Manager",
  department: "Sales"
};

const emp2: Employee = {
  name: "Bob",
  age: 28,
  position: "Developer",
  department: "Engineering"
};

console.log(describeEmployee(emp1));
// Output: Alice is a Manager in the Sales department, leading the team.

console.log(describeEmployee(emp2));
// Output: Bob is a Developer in the Engineering department, writing code.
