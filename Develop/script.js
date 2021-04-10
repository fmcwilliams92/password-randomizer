// Nums Array
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Upper case Arr
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//lowercase arr 
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// special Arr 
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// password questions
function getPasswordOptions() {
  var passLength = parseInt(prompt("How long do you want your password to be?"));
  if (isNaN(passLength) === true) {
    alert("Must be a number!");
    return getPasswordOptions();
  }
  if (passLength < 8 || passLength > 128) {
    alert("Must be at least 8 characters, and less than 128");
    return getPasswordOptions();
  }

  // special char question
  var hasSpecialChar = confirm("Do you want to use special characters?");

  // numeric char question
  var hasNumericChar = confirm("Do you want to use numeric characters?");

  // lower char question
  var hasLowerChar = confirm("Do you want to use lower case letters?");

  // upper char question
  var hasUpperChar = confirm("Do you want to use upper case letters?");

  // check booleans for questions
  if (
    hasSpecialChar === false &&
    hasNumericChar === false &&
    hasLowerChar === false &&
    hasUpperChar === false
    ) {
    alert('Must select at least one character type');
    return getPasswordOptions();
  }

  // storing the user input into an object 
  var passwordOptions = {
    passLength: passLength,
    hasSpecialChar: hasSpecialChar,
    hasNumericChar: hasNumericChar,
    hasLowerChar: hasLowerChar,
    hasUpperChar: hasUpperChar
  };
    return passwordOptions;
};

// funtion that gets a random element from the array
function getRandomArrayEl(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randEl = arr[randIndex];
  return randEl;
};

function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleChars = [];
  var guaranteedChar = [];
  if (options.hasSpecialChar) {
    possibleChars = possibleChars.concat(specialCharacters);
    guaranteedChar.push(getRandomArrayEl(specialCharacters));
  }
  if (options.hasNumericChar) {
    possibleChars = possibleChars.concat(numericCharacters);
    guaranteedChar.push(getRandomArrayEl(numericCharacters));
  }
  if (options.hasLowerChar) {
    possibleChars = possibleChars.concat(lowerCasedCharacters);
    guaranteedChar.push(getRandomArrayEl(lowerCasedCharacters));
  }
  if (options.hasUpperChar) {
    possibleChars = possibleChars.concat(upperCasedCharacters);
    guaranteedChar.push(getRandomArrayEl(upperCasedCharacters));
  }
  for (var i = 0; i < options.passLength; i++) {
    var possibleChar = getRandomArrayEl(possibleChars);
    result.push(possibleChar);
  }
  for (var i = 0; i < guaranteedChar.length; i++) {
    result[i] = guaranteedChar[i];
  }
  return result.join('');
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);