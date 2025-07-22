const input = document.getElementById("input");
const inputStatus = document.getElementById("input-status");
const generateButton = document.getElementById("submit");
const copyButton = document.getElementById("copyButton");

let passwordField = document.getElementById("passwordField");

const bigLetters = document.getElementById("bigLetters");
const numbersCheckbox = document.getElementById("numbers");
const specialCheckbox = document.getElementById("specialCharacters");

input.oninput = function () {
  inputStatus.innerHTML = input.value;
};

generateButton.addEventListener("click", () => {
  let passwordLength = input.value;
  let password = "";

  const lowercase = "qwertyuiopasdfghjklzxcvbnm";
  const uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const digits = "1234567890";
  const special = "!@#$%^&*";

  let allCharacters = lowercase;
  let requiredCharacters = "";

  if (bigLetters.checked) {
    allCharacters += uppercase;
    requiredCharacters +=
      uppercase[Math.floor(Math.random() * uppercase.length)];
  }

  if (numbersCheckbox.checked) {
    allCharacters += digits;
    requiredCharacters += digits[Math.floor(Math.random() * digits.length)];
  }

  if (specialCheckbox.checked) {
    allCharacters += special;
    requiredCharacters += special[Math.floor(Math.random() * special.length)];
  }

  console.log(
    `Obecna długość hasła: ${passwordLength}, a aktualne znaki to ${allCharacters}`
  );

  for (let i = requiredCharacters.length; i < passwordLength; i++) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }

  password += requiredCharacters;

  console.log(password);

  passwordField.textContent = password;
});

copyButton.addEventListener("click", () => {
  const copiedPassword = passwordField.textContent;

  navigator.clipboard.writeText(copiedPassword);
  alert("Skopiowano hasło do schowka");
});
