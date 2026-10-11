// Setting Game Name
let gameName = "Guess The Word";
document.title = gameName;
document.querySelector("h1").innerHTML = gameName;
document.querySelector("footer").innerHTML =
  `${gameName} Game Created By Ahmed Ghareeb`;

// Setting Game Options

let numberOfTries = 6;
let numberOfletters = 6;
let currentTry = 1;

function generateInputFields() {
  const inputContainer = document.querySelector(".inputs");

  for (let i = 1; i <= numberOfTries; i++) {
    const inputRow = document.createElement("div");
    inputRow.classList.add(`try-${i}`);
    inputRow.innerHTML = `<span>Try ${i}</span>`;

    if (i !== 1) inputRow.classList.add("disabled-inputs");

    // Create Inputs

    for (let j = 1; j <= numberOfletters; j++) {
      const input = document.createElement("input");
      input.type = "text";
      input.id = `try-${i}-letter-${j}`;
      input.setAttribute("maxlength", "1");
      inputRow.appendChild(input);
    }
    inputContainer.appendChild(inputRow);
  }
  inputContainer.children[0].children[1].focus();

  // Disable All Inputs Except First Row

  const inputsInDisableDiv = document.querySelectorAll(
    ".disabled-inputs input",
  );
  inputsInDisableDiv.forEach((input) => (input.disabled = true));

  const inputs = document.querySelectorAll("input");
  inputs.forEach((input, index) => {
    // Convert Input To Uppercase
    input.addEventListener("input", function () {
      this.value = this.value.toUpperCase();
      const nextInput = inputs[index + 1];
      if (nextInput) nextInput.focus();
    });
  });
}

window.onload = function () {
  generateInputFields();
};
