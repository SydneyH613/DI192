const button = document.getElementById("btn");
const container = document.getElementById("container");

function getRandomId() {
  return Math.floor(Math.random() * 83) + 1;
}

function showLoading() {
  container.innerHTML = `
    <p>Loading...</p>
    <i class="fa-solid fa-spinner fa-spin loader"></i>
  `;
}

function showError() {
  container.innerHTML = `
    <p>❌ Oh no! That person isn’t available.</p>
  `;
}

function displayCharacter(data, homeworld) {
  container.innerHTML = `
    <h2>${data.properties.name}</h2>
    <p>Height: ${data.properties.height}</p>
    <p>Gender: ${data.properties.gender}</p>
    <p>Birth Year: ${data.properties.birth_year}</p>
    <p>Home World: ${homeworld}</p>
  `;
}

async function fetchCharacter() {
  showLoading();

  try {
    const id = getRandomId();

    const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
    if (!response.ok) throw new Error();

    const data = await response.json();

    const homeRes = await fetch(data.result.properties.homeworld);
    if (!homeRes.ok) throw new Error();

    const homeData = await homeRes.json();

    displayCharacter(data.result, homeData.result.properties.name);

  } catch (err) {
    showError();
  }
}

button.addEventListener("click", fetchCharacter);
