// Assignment Code
var generateBtn = document.querySelector("#generate");

function passwordCriteria() {
  let number, symbol, capital, lower, length;
  let strCriteria = ["number", "symbol", "capital", "lowercase letter", "length"]
  let passCriteria = [number, symbol, capital, lower, length = 0];

  for (i=0; i < passCriteria.length; i++) {
    if (i != 4) {
      passCriteria[i] = confirm("Require a " + strCriteria[i] + "?");
    } else {
      while (!(passCriteria[i] >= 8 && passCriteria[i] <= 128)) {
        passCriteria[i] = parseInt(prompt(strCriteria[i] + "? (8-128)"));
      }
    }
  }
  var pog;
  for (i=0; i < passCriteria.length; i++) {
    if (passCriteria[i] === true) {
      pog = true;
    }
  }
  if (pog) {
    return passCriteria;
  } else {
    return false;
  }
}

function generatePassword() {
  criteria = passwordCriteria();
  while (criteria === false) {
    alert("Please select a criteria");
    criteria = passwordCriteria();
  }
  let charset = "";
  let lowers = "abcdefghijklmnopqrstuvwxyz";
  let numbers = "0123456789";
  let symbols = "*;<>()[]{}#$?!^|:";
  let capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let charsets = [numbers, symbols, capitals, lowers];
  
  // Adds characters to variable "charset" based on criteria
  for (i=0; i < charsets.length; i++) {
    if (criteria[i]) {
      charset = charset + charsets[i];
    }
  }

  let num, sym, cap, low;
  let cri = [num, sym, cap, low];
  // Loops until all criteria is met
  let infinite = true;
  while (infinite) {
    for (i in cri) {
      cri[i] = false;
    }
    // Clears generatedPassword
    var generatedPassword = "";

    // Generates a password and stores it in variable- generatedPassword
    for (j=0; j < criteria[4]; j++) {
      generatedPassword = generatedPassword + (charset[Math.floor(Math.random() * charset.length)]);
    }

    // Checks to see what characters the password has
    for (i in generatedPassword) {
      for (randvar=0; randvar < charsets.length; randvar++) {
        for (l in charsets[randvar]) {
          if (generatedPassword[i] === charsets[randvar][l]) {
            cri[randvar] = true;
            break;
          }
        }
        if (cri[randvar] === true) {
          break;
        }
      }
    }
    // Checks to see if criteria is met
    if (cri[0] === criteria[0] && cri[1] === criteria[1] && cri[2] === criteria[2] && cri[3] === criteria[3]) {
      infinite = false;
      break;
    } 
  }

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
