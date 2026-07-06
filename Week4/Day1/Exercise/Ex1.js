const url = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(url)
  .then(response => {
    // Check if response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Convert to JSON
  })
  .then(data => {
    console.log(data); // Log the JS object
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });


  