// Base interface
interface User {
  readonly id: number;   // cannot be changed after initialization
  name: string;
  email: string;
}

// Extend User to create PremiumUser
interface PremiumUser extends User {
  membershipLevel?: string; // optional property
}

// Function to print user details
function printUserDetails(user: PremiumUser): void {
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  
  if (user.membershipLevel) {
    console.log(`Membership Level: ${user.membershipLevel}`);
  } else {
    console.log("Membership Level: Standard");
  }
}

// Example usage
const user1: PremiumUser = {
  id: 101,
  name: "Alice",
  email: "alice@example.com",
  membershipLevel: "Gold"
};

const user2: PremiumUser = {
  id: 102,
  name: "Bob",
  email: "bob@example.com"
};

printUserDetails(user1);
/*
ID: 101
Name: Alice
Email: alice@example.com
Membership Level: Gold
*/

printUserDetails(user2);
/*
ID: 102
Name: Bob
Email: bob@example.com
Membership Level: Standard
*/

// ❌ Attempting to modify readonly property will cause an error
// user1.id = 200; // Error: Cannot assign to 'id' because it is a read-only property
