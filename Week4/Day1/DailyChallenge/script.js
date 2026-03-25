const form = document.getElementById("gifForm");
const input = document.getElementById("searchInput");
const container = document.getElementById("gifContainer");
const deleteAllBtn = document.getElementById("deleteAll");

const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// Handle form submit
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const category = input.value;

  const url = `https://api.giphy.com/v1/gifs/random?tag=${category}&api_key=${API_KEY}`;

  try {
    const response = await fetch(url);

    // Check response
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Get GIF URL (from images object)
    const gifUrl = data.data.images.original.url;

    // Create GIF element
    const gifDiv = document.createElement("div");

    const img = document.createElement("img");
    img.src = gifUrl;
    img.style.width = "200px";

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";

    // Delete this specific GIF
    deleteBtn.addEventListener("click", () => {
      gifDiv.remove();
    });

    // Append elements
    gifDiv.appendChild(img);
    gifDiv.appendChild(deleteBtn);
    container.appendChild(gifDiv);

    // Clear input
    input.value = "";

  } catch (error) {
    console.error("Error fetching GIF:", error);
  }
});

// Delete ALL GIFs
deleteAllBtn.addEventListener("click", () => {
  container.innerHTML = "";
});
