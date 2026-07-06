// Step 1: Define the Person type
type Person = {
  name: string;
  age: number;
};

// Step 2: Define the Address type
type Address = {
  street: string;
  city: string;
};

// Step 3: Create an intersection type combining Person & Address
type PersonWithAddress = Person & Address;

// Step 4: Create a variable of the intersection type
const john: PersonWithAddress = {
  name: "John Doe",
  age: 30,
  street: "123 Main St",
  city: "New York"
};

console.log(john);
