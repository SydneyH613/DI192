const users = { user1: 18273, user2: 92833, user3: 90315 };

// Part 1 - object to array of entries
const usersArray = Object.entries(users);
console.log(usersArray);

// Part 2 - multiply each ID by 2
const doubledUsers = usersArray.map(([name, id]) => [name, id * 2]);
console.log(doubledUsers);