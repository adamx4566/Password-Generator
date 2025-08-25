const passwordOutput = document.getElementById("passwordOutput");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");
const lengthInput = document.getElementById("length");
const includeLower = document.getElementById("includeLower");
const includeUpper = document.getElementById("includeUpper");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");

const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?/";

function generatePassword() {
  let chars = "";
  if (includeLower.checked) chars += lowerChars;
  if (includeUpper.checked) chars += upperChars;
  if (includeNumbers.checked) chars += numberChars;
  if (includeSymbols.checked) chars += symbolChars;

  let password = "";
  const length = parseInt(lengthInput.value);

  if (chars === "") return "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
}

generateBtn.addEventListener("click", () => {
  const password = generatePassword();
  passwordOutput.value = password || "Select at least one option!";
});

copyBtn.addEventListener("click", () => {
  passwordOutput.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
});
