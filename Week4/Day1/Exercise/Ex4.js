function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved'); // After 2 seconds, the promise resolves with "resolved"
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling'); 
  // 👉 This runs immediately → prints: calling

  try {
    let result = await resolveAfter2Seconds();
    // 👉 Execution pauses here for ~2 seconds until the promise resolves

    console.log(result);
    // 👉 After 2 seconds → prints: resolved
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the function
asyncCall();

/*
EXPECTED OUTPUT:

calling
// (2 second delay)
resolved
*/
