// Global variable
let allBoldItems;

// Function to collect all bold items
function getBoldItems() {
    const paragraph = document.getElementById("myParagraph");
    allBoldItems = paragraph.querySelectorAll("strong");
}

// Function to highlight bold text
function highlight() {
    allBoldItems.forEach(item => {
        item.style.color = "blue";
    });
}

// Function to return text to default color
function returnItemsToDefault() {
    allBoldItems.forEach(item => {
        item.style.color = "black";
    });
}

// Run getBoldItems once the page loads
getBoldItems();

// Add event listeners
const paragraph = document.getElementById("myParagraph");

paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);
