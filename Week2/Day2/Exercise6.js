// --------------------
// 1️⃣ Change id using setAttribute
// --------------------

const navDiv = document.getElementById("navBar");

// Change id from navBar to socialNetworkNavigation
navDiv.setAttribute("id", "socialNetworkNavigation");


// --------------------
// 2️⃣ Create new <li> with "Logout"
// --------------------

// Select the <ul>
const ul = navDiv.querySelector("ul");

// Create new <li>
const newLi = document.createElement("li");

// Create text node
const textNode = document.createTextNode("Logout");

// Append text to <li>
newLi.appendChild(textNode);

// Append <li> to <ul>
ul.appendChild(newLi);


// --------------------
// 3️⃣ Get first and last <li> and display their text
// --------------------

const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

// Display the text of each link
console.log("First link:", firstLi.textContent);
console.log("Last link:", lastLi.textContent);
