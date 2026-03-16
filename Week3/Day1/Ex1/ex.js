// ============================================================
// Exercise 1: Colors
// ============================================================

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// 1. Display colors with index
colors.forEach((color, index) => {
  console.log(`${index + 1}# choice is ${color}.`);
});

// 2. Check if "Violet" exists in the array
const hasViolet = colors.some(color => color === "Violet");
console.log(hasViolet ? "Yeah" : "No...");


// ============================================================
// Exercise 2: Colors #2
// ============================================================

const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
  const n = index + 1;
  const suffix = n < 4 ? ordinal[n] : ordinal[0];
  console.log(`${n}${suffix} choice is ${color}.`);
});


// ============================================================
// Exercise 3: Analyzing
// ============================================================

// ------ 1 ------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// Output: ["bread", "carrot", "potato", "chicken", "apple", "orange"]
// The spread operator unpacks each array inline into the new array.

// ------ 2 ------
const country = "USA";
console.log([...country]);
// Output: ["U", "S", "A"]
// Spreading a string splits it into individual characters.

// ------ Bonus ------
let newArray = [...[,,]];
console.log(newArray);
// Output: [undefined, undefined]
// [,,] creates a sparse array with 2 empty slots.
// Spreading it converts those holes into explicit `undefined` values.


// ============================================================
// Exercise 4: Employees
// ============================================================

const users = [
  { firstName: 'Bradley',  lastName: 'Bouley',   role: 'Full Stack Resident'   },
  { firstName: 'Chloe',    lastName: 'Alnaji',   role: 'Full Stack Resident'   },
  { firstName: 'Jonathan', lastName: 'Baughn',   role: 'Enterprise Instructor' },
  { firstName: 'Michael',  lastName: 'Herman',   role: 'Lead Instructor'       },
  { firstName: 'Robert',   lastName: 'Hajek',    role: 'Full Stack Resident'   },
  { firstName: 'Wes',      lastName: 'Reid',     role: 'Instructor'            },
  { firstName: 'Zach',     lastName: 'Klabunde', role: 'Instructor'            },
];

// 1. Welcome message for each user
const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);

// 2. Filter Full Stack Residents
const fullStackResidents = users.filter(user => user.role === "Full Stack Resident");
console.log(fullStackResidents);

// 3. Bonus: Last names of Full Stack Residents
const fullStackLastNames = users
  .filter(user => user.role === "Full Stack Resident")
  .map(user => user.lastName);
console.log(fullStackLastNames);


// ============================================================
// Exercise 5: Star Wars
// ============================================================

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const sentence = epic.reduce((accumulator, word) => `${accumulator} ${word}`);
console.log(sentence);
// Output: "a long time ago in a galaxy far far away"


// ============================================================
// Exercise 6: Employees #2
// ============================================================

const students = [
  { name: "Ray",      course: "Computer Science",       isPassed: true  },
  { name: "Liam",     course: "Computer Science",       isPassed: false },
  { name: "Jenner",   course: "Information Technology", isPassed: true  },
  { name: "Marco",    course: "Robotics",               isPassed: true  },
  { name: "Kimberly", course: "Artificial Intelligence",isPassed: false },
  { name: "Jamie",    course: "Big Data",               isPassed: false },
];

// 1. Students who passed
const passedStudents = students.filter(student => student.isPassed);
console.log(passedStudents);

// 2. Bonus: Congratulate students who passed
students
  .filter(student => student.isPassed)
  .forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}!`);
  });