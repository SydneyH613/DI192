setTimeout(function() {
    alert("Hello World");
}, 2000);


setTimeout(function() {
    const container = document.getElementById("container");

    const newParagraph = document.createElement("p");
    newParagraph.textContent = "Hello World";

    container.appendChild(newParagraph);
}, 2000);


const container = document.getElementById("container");
const clearButton = document.getElementById("clear");

let intervalId = setInterval(function() {

    const newParagraph = document.createElement("p");
    newParagraph.textContent = "Hello World";
    container.appendChild(newParagraph);

    // Stop automatically when there are 5 paragraphs
    if (container.children.length >= 5) {
        clearInterval(intervalId);
    }

}, 2000);

// Stop when button is clicked
clearButton.addEventListener("click", function() {
    clearInterval(intervalId);
});
