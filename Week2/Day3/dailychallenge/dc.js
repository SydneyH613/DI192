const form = document.getElementById("libform");
const story = document.getElementById("story");
const shuffleBtn = document.getElementById("shuffle");

let currentWords = null;

const stories = [
  (n, a, p, v, pl) => `${p} saw a ${a} ${n} and decided to ${v} in ${pl}.`,
  (n, a, p, v, pl) => `In ${pl}, ${p} found a ${a} ${n} and began to ${v}.`,
  (n, a, p, v, pl) => `A ${a} ${n} made ${p} want to ${v} forever in ${pl}.`
];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const noun = document.getElementById("noun").value.trim();
  const adjective = document.getElementById("adjective").value.trim();
  const person = document.getElementById("person").value.trim();
  const verb = document.getElementById("verb").value.trim();
  const place = document.getElementById("place").value.trim();

  if (!noun || !adjective || !person || !verb || !place) {
    alert("Please fill in all fields!");
    return;
  }

  currentWords = { noun, adjective, person, verb, place };
  generateStory();
});

shuffleBtn.addEventListener("click", function () {
  if (!currentWords) {
    alert("Generate a story first!");
    return;
  }
  generateStory();
});

function generateStory() {
  const { noun, adjective, person, verb, place } = currentWords;
  const randomIndex = Math.floor(Math.random() * stories.length);
  story.textContent = stories[randomIndex](noun, adjective, person, verb, place);
}
