//Exercise 1

function displayNumbersDivisible() {
    let sum = 0;
    let divisibleNumbers = [];
    for (let i = 0; i <= 500; i++){
        if (i % 23 === 0){
            console.log('Found: ${i} (${i}/23 = ${i/23})');
            divisibleNumbers.push(i);
            sum += 1;
        }
    }
    console.log(divisibleNumbers.join(' '));
    console.log('Sum :', sum);
}
displayNumbersDivisible();

//Exercise 2
const stock = { 
  banana: 6, 
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1
};

const prices = {    
  banana: 4, 
  apple: 2, 
  pear: 1,
  orange: 1.5,
  blueberry: 10
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let total = 0;
  for (const item of shoppingList) {
    if (item in stock && stock[item] > 0) {
      total += prices[item];
      stock[item] -= 1; // optionally reduce stock
    }
  }
  return total;
}

console.log("Total price:", myBill());
console.log("Remaining stock:", stock);


// Exercise 3

function changeEnough(itemPrice, amountOfChange) {
  const coinValues = [0.25, 0.10, 0.05, 0.01];
  let totalChange = 0;
  
  for (let i = 0; i < amountOfChange.length; i++) {
    totalChange += amountOfChange[i] * coinValues[i];
  }
  
  return totalChange >= itemPrice;
}

// Test cases
console.log(changeEnough(4.25, [25, 20, 5, 0]));    // true
console.log(changeEnough(14.11, [2, 100, 0, 0]));   // false
console.log(changeEnough(0.75, [0, 0, 20, 5]));     // true


// Exercise 4



function hotelCost() {
  let nights;
  while (!nights || isNaN(nights)) {
    nights = prompt("How many nights would you like to stay in the hotel?");
  }
  return parseInt(nights) * 140;
}

function planeRideCost() {
  let destination;
  while (!destination || typeof destination !== "string" || destination.trim() === "") {
    destination = prompt("What is your destination?");
  }
  
  if (destination === "London") {
    return 183;
  } else if (destination === "Paris") {
    return 220;
  } else {
    return 300;
  }
}

function rentalCarCost() {
  let days;
  while (!days || isNaN(days)) {
    days = prompt("How many days would you like to rent the car?");
  }
  days = parseInt(days);
  let cost = days * 40;
  
  if (days > 10) {
    cost *= 0.95; // 5% discount
  }
  return cost;
}

function totalVacationCost() {
  const hotel = hotelCost();
  const plane = planeRideCost();
  const car = rentalCarCost();
  const total = hotel + plane + car;
  
  console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
  console.log(`Total vacation cost: $${total}`);
  return total;
}

totalVacationCost();