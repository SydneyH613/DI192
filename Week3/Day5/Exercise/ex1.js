//Exercise 1
function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve(`${num} is less than or equal to 10`);
    } else {
      reject(`${num} is greater than 10`);
    }
  });
}


// ===== Tests =====

// Should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error));

// Should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error));


  //Exercise 2
  const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 4000); // 4 seconds
});


// Test it
myPromise.then(result => console.log(result));

//Exercise 3
// Promise that resolves with value 3
const resolvedPromise = Promise.resolve(3);

// Promise that rejects with "Boo!"
const rejectedPromise = Promise.reject("Boo!");


// ===== Test them =====

// Resolved promise
resolvedPromise
  .then(result => console.log(result))   // 3
  .catch(error => console.log(error));

// Rejected promise
rejectedPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));   // "Boo!"