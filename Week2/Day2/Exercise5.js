// --------------------
// PART 1
// --------------------

// Retrieve the div and console.log it
const container = document.getElementById("container");
console.log(container);

// Change “Pete” to “Richard”
const allLis = document.querySelectorAll("li");

allLis.forEach(function(li) {
    if (li.textContent === "Pete") {
        li.textContent = "Richard";
    }
});

// Delete the second <li> of the second <ul>
const uls = document.querySelectorAll("ul");
uls[1].children[1].remove();

// Change the first <li> of each <ul> to your name
uls.forEach(function(ul) {
    ul.children[0].textContent = "Sydney";
});


// --------------------
// PART 2
// --------------------

// Add class "student_list" to both <ul>
uls.forEach(function(ul) {
    ul.classList.add("student_list");
});

// Add classes "university" and "attendance" to first <ul>
uls[0].classList.add("university", "attendance");


// --------------------
// PART 3
// --------------------

// Add light blue background + padding to div
container.style.backgroundColor = "lightblue";
container.style.padding = "15px";

// Do not display <li> that contains "Dan"
allLis.forEach(function(li) {
    if (li.textContent === "Dan") {
        li.style.display = "none";
    }
});

// Add border to <li> that contains "Richard"
allLis.forEach(function(li) {
    if (li.textContent === "Richard") {
        li.style.border = "2px solid black";
    }
});

// Change font size of whole body
document.body.style.fontSize = "20px";
