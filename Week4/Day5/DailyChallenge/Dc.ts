// Step 1: Define the types
type User = {
  type: 'user';
  name: string;
  age: number;
};

type Product = {
  type: 'product';
  id: number;
  price: number;
};

type Order = {
  type: 'order';
  orderId: string;
  amount: number;
};

// Step 2: Implement the function with type guards
function handleData(items: Array<User | Product | Order>): string[] {
  return items.map(item => {
    switch (item.type) {
      case 'user':
        return `Hello ${item.name}, you are ${item.age} years old.`;
      case 'product':
        return `Product ID ${item.id} costs $${item.price}.`;
      case 'order':
        return `Order ${item.orderId} has a total amount of $${item.amount}.`;
      default:
        // Gracefully handle unexpected cases
        return 'Unknown item type.';
    }
  });
}

// Example usage
const data: Array<User | Product | Order> = [
  { type: 'user', name: 'Alice', age: 28 },
  { type: 'product', id: 101, price: 49.99 },
  { type: 'order', orderId: 'ORD123', amount: 149.95 },
];

console.log(handleData(data));
