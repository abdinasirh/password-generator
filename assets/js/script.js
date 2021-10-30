// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

function generatePassword(){
  var passwordCritaria = alert("Your password should have uppercase, lowercase, numeric, spacecial characters and must be between 8-128 characters.");

  var passwordLength = prompt("How many characters would you like your password to be?");
while(passwordLength <=7 || passwordLength >= 128){
  alert("password length must be between 8-128 characters. please try again");
  var passwordLength = prompt("How many characters would you like your password to be?");
}
  // var confirmLength = (prompt("How many characters would like your password to contain?"));

  // 1. prompt the user for the password critaria 
  //    a. password length 8 < 128
  //    b. lowercase, uppercase, numbers, special characters
  // 2. validate the input
  // 3. generate password 
  
  // 4. display password
  return "Generated password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
