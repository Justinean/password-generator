// Assignment Code
var generateBtn = document.querySelector("#generate");

function passwordCriteria() {
  let number, symbol, capital, length;
  let strCriteria = ["number", "symbol", "capital", "length"]
  let passCriteria = [number, symbol, capital, length = 0];

  for (i=0; i < passCriteria.length; i++) {
    if (i != 3) {
      while (passCriteria[i] !== "y" && passCriteria[i] !== "n") {
        passCriteria[i] = prompt("Require a " + strCriteria[i] + "? (y/n)");
      }
      if (passCriteria[i] === "y") {
        passCriteria[i] = true;
      } else {
        passCriteria[i] = false;
      }
    } else {
      while (!(passCriteria[i] >= 8 && passCriteria[i] <= 128)) {
        passCriteria[i] = parseInt(prompt(strCriteria[i] + "? (8-128)"));
      }
    }
  }

  return passCriteria;
}

function generatePassword() {
  criteria = passwordCriteria();
  let charset = "abcdefghijklmnopqrstuvwxyz";
  let number = "0123456789";
  let symbol = "*;<>()[]{}#$?!^|:";
  let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  if (criteria[2]) {
    charset = charset + capital;
  }
  if (criteria[0]) {
    charset = charset + number;
  }
  if (criteria[1]) {
    charset = charset + symbol;
  }

  let generatedPassword = [];
  for (i=0; i < criteria[3]; i++) {
    generatedPassword.push(charset[Math.floor(Math.random() * charset.length)]);
  }

  generatedPassword = generatedPassword.join("");

  let password = generatedPassword;
  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
