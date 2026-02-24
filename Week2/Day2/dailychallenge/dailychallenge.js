

const planets = [
    { name: "Mercury", color: "gray", moons: 0 },
    { name: "Venus", color: "orange", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "brown", moons: 4 },
    { name: "Saturn", color: "goldenrod", moons: 3 },
    { name: "Uranus", color: "lightblue", moons: 2 },
    { name: "Neptune", color: "darkblue", moons: 1 }
];
    const section = document.querySelector(".listPlanets");

    planets.forEach(function(planet) {


 // Create planet div
    const planetDiv = document.createElement("div");
    planetDiv.classList.add("planet");

    // Set background color
    planetDiv.style.backgroundColor = planet.color;

    // Optional: show name inside
    planetDiv.textContent = planet.name;

     section.appendChild(planetDiv);


    })

   