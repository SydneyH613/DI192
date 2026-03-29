class Employee {
  // Private properties: accessible only inside the class
  private name: string;
  private salary: number;

  // Public property: accessible from anywhere
  public position: string;

  // Protected property: accessible inside the class and subclasses
  protected department: string;

  // Constructor to initialize all properties
  constructor(name: string, salary: number, position: string, department: string) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department;
  }

  // Public method to return employee info
  public getEmployeeInfo(): string {
    return `Name: ${this.name}, Position: ${this.position}`;
  }
}

// Example usage
const emp = new Employee("Alice", 50000, "Software Engineer", "Development");
console.log(emp.getEmployeeInfo()); // Name: Alice, Position: Software Engineer
console.log(emp.position);          // Software Engineer
// console.log(emp.name);           // ❌ Error: 'name' is private
// console.log(emp.department);     // ❌ Error: 'department' is protected
