// Exercise 1

// 1.
const people = ["Greg", "Mary", "Devon", "James"];

people.shift();

console.log(people);

// 2. 
people.splice(2,1, "Jason")
console.log(people)

// 3.

people.splice(3, 1, "Sydney")
console.log(people)


//4. 

Mary_Index = people.indexOf("Mary")

console.log(Mary_Index)

// 5. 
const peple= ["Mary", "Devon", "Jason", "Sydney"]
const copy= people.slice(1,3)
console.log(copy)

// 6. 
Foo_Index = people.indexOf("Foo")
    // -1 because it doesn't exist in the array

// 7. 
const last = people[people.length - 1];

console.log(last);

// Part 2
// 1.

for (let i = 0; i < people.length; i++) {
  console.log(people[i]); }


for (let i = 0; i < people.length; i++) {
  console.log(people[i]); 
  if (people[i] === "Devon") {
    break;
  }
}

// Exercise 2
const colors = ["blue", "green", "yellow", "pink", "gold"]

colors.forEach((color, index) => {
  console.log(`My #${index + 1} choice is ${color}`);
});

// Exercise 3

My_Number = prompt("Enter a number: ")
typeof(My_Number)

parseInt(My_Number)
while (My_Number < 10) {
   My_Number =  prompt("Enter another number: ")
   My_Number = parseInt(My_Number);}
console.log(`Your number is: ${My_Number}`);

// Exercise 4

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors);
console.log(`First Floor: ${building.numberOfAptByFloor.firstFloor}, Third Floor: ${building.numberOfAptByFloor.thirdFloor}`);

console.log(`Second Tenant: ${building.nameOfTenants[1]} has ${building.numberOfRoomsAndRent.dan[0]} rooms`);



if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > (building.numberOfRoomsAndRent.dan[1]));


if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]) {
    building.numberOfRoomsAndRent.dan[1] += 1200; 
}
console.log(building.numberOfRoomsAndRent.dan[1]);  

// Exercise 5

const family = {
    numberOfMembers: [5],
    numberOfSons: [2],
    numberOfDaughters: [1]
}
for (let fam in family) {
    console.log(fam)
}
for (let fam in family) {
    console.log(family[fam]);
}

// Exercise 6

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
console.log('')