let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
};

// 1. Display fruits using forEach
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
};

// 2. Clone groceries (demonstrating pass by value vs reference)
const cloneGroceries = () => {
    // --- Pass by VALUE (primitives) ---
    let user = client;         // "John" is copied by VALUE
    client = "Betty";          // Changing client does NOT affect user
    console.log("client:", client); // "Betty"
    console.log("user:", user);     // Still "John" ✅

    // --- Pass by REFERENCE (objects) ---
    let shopping = groceries;           // shopping POINTS to the same object
    shopping.totalPrice = "35$";        // This ALSO changes groceries.totalPrice
    shopping.other.paid = false;        // This ALSO changes groceries.other.paid

    console.log("shopping.totalPrice:", shopping.totalPrice);       // "35$"
    console.log("groceries.totalPrice:", groceries.totalPrice);     // "35$" too! ⚠️

    console.log("shopping.other.paid:", shopping.other.paid);       // false
    console.log("groceries.other.paid:", groceries.other.paid);     // false too! ⚠️
};

// 3. Invoke the function
cloneGroceries();

//Will user reflect the change to client? No. Strings are primitives and are passed by value — user received an independent copy of "John". Setting client = "Betty" only affects client's own slot in memory.
//Will shopping.totalPrice change when you change it? Yes — and so will groceries.totalPrice. Objects are passed by reference: let shopping = groceries doesn't copy the object, it just makes shopping point to the exact same object in memory. Any mutation through either variable is visible through both.
//Will shopping.other.paid change? Same answer — and for the same reason. other is a nested object, also accessed by reference. Setting .paid = false modifies the one shared object, so both shopping and groceries reflect the change.