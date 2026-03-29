class Product {
  // Readonly property: can only be set once, in constructor
  readonly id: number;

  // Public properties
  public name: string;
  public price: number;

  // Constructor to initialize properties
  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  // Method to return product info
  public getProductInfo(): string {
    return `Product: ${this.name}, Price: $${this.price}`;
  }
}

// Example usage
const product1 = new Product(101, "Laptop", 1200);
console.log(product1.getProductInfo()); // Product: Laptop, Price: $1200
console.log(product1.id);               // 101

// Attempting to modify readonly property
// product1.id = 102; // ❌ Error: Cannot assign to 'id' because it is a read-only property

// Modifying other properties is allowed
product1.price = 1100;
console.log(product1.getProductInfo()); // Product: Laptop, Price: $1100
