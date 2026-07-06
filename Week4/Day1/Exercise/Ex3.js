async function getStarship() {
  const url = "https://www.swapi.tech/api/starships/9/";

  try {
    const response = await fetch(url);

    // Check if response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log(data.result); // Expected output
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function
getStarship();
