const input = document.getElementById("input");
const inputStatus = document.getElementById("input-status");
const generateButton = document.getElementById("submit");
const copyButton = document.getElementById("copyButton");

let passwordField = document.getElementById("passwordField");

const bigLetters = document.getElementById("bigLetters");
const numbers = document.getElementById("numbers");
const specialCharacters = document.getElementById("specialCharacters");

input.oninput = function () {
  inputStatus.innerHTML = input.value;
};

generateButton.addEventListener("click", () => {
  let passwordLength = input.value;
  let password = "";

  let characters = "qwertyuiopasdfghjklzxcvbnm";

  if (bigLetters.checked) {
    characters += "QWERTYUIOPASDFGHJKLZXCVBNM";
  }

  if (numbers.checked) {
    characters += "1234567890";
  }

  if (specialCharacters.checked) {
    characters += "!@#$%^&*";
  }

  console.log(
    `Obecna długość hasła: ${passwordLength}, a aktualne znaki to ${characters}`
  );

  for (i = 0; i < passwordLength; i++) {
    let randomIndexes = Math.floor(Math.random() * characters.length);
    password += characters[randomIndexes];
  }
  console.log(password);

  passwordField.textContent = password;
});

copyButton.addEventListener("click", () => {
  const copiedPassword = passwordField.textContent;

  navigator.clipboard.writeText(copiedPassword);
  console.log(`skopiowano ${copiedPassword}`);
  alert("Skopiowano hasło do schowka");
});
