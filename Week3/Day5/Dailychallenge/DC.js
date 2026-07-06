//DC1
function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    // check if all elements are strings
    const allStrings = words.every(word => typeof word === "string");

    if (allStrings) {
      const uppercased = words.map(word => word.toUpperCase());
      resolve(uppercased);
    } else {
      reject("Error: Not all items are strings");
    }
  });
}

function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words.length > 4) {
      const sorted = words.sort();
      resolve(sorted);
    } else {
      reject("Error: Array length must be greater than 4");
    }
  });
}


// TESTS

// 1. Should go to catch (not all strings)
makeAllCaps([1, "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));

// 2. Should go to catch (length <= 4)
makeAllCaps(["apple", "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));

// 3. Should work
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result)) 
  .catch(error => console.log(error));


//DC 2

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;


// 1. Convert JSON string to JS object
function toJs() {
  return new Promise((resolve, reject) => {
    const morseJS = JSON.parse(morse);

    if (Object.keys(morseJS).length === 0) {
      reject("Error: Morse object is empty");
    } else {
      resolve(morseJS);
    }
  });
}


// 2. Convert user input to morse
function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const userInput = prompt("Enter a word or sentence:").toLowerCase();

    const translation = [];

    for (let char of userInput) {
      if (char === " ") continue; // skip spaces (optional)

      if (!morseJS[char]) {
        reject(`Error: Character "${char}" does not exist in Morse`);
        return;
      }

      translation.push(morseJS[char]);
    }

    resolve(translation);
  });
}


// 3. Join and display on DOM
function joinWords(morseTranslation) {
  const output = morseTranslation.join("\n");

  const div = document.createElement("div");
  div.textContent = output;

  document.body.appendChild(div);
}


// CHAINING
toJs()
  .then(morseJS => toMorse(morseJS))
  .then(morseTranslation => joinWords(morseTranslation))
  .catch(error => console.log(error));
