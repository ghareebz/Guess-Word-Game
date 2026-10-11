// Setting Game Name
let gameName = "Guess The Word";
document.title = gameName;
document.querySelector("h1").innerHTML = gameName;
document.querySelector("footer").innerHTML = `${gameName} Game Created By Ahmed Ghareeb`;

// Setting Game Options

let numberOfTries = 6;
let numberOfletters = 6;
let currentTry = 1;

function generateInputFields() {
    const inputContainer = document.getElementById(".inputs");

    for (let i = 1; i <= numberOfTries; i++) {
        const inputRow = document.createElement("div");
        inputRow.classList.add(`try-${i}`);
        inputRow.innerHTML = `<span>Try ${i}</span>`;
        inputContainer.appendChild(inputRow);
    }
}