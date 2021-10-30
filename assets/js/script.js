// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var LowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = LowerCaseLetters.toUpperCase;
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/; 

var passwordLength = "";
var confirmSpecialChar;
var confirmNumber;
var confirmUpperCase;
var confirmLowerCase;

function generatePassword(){
  var passwordCritaria = alert("Your password should have uppercase, lowercase, numbers, spacecial characters and must be between 8-128 characters.");

  var passwordLength = prompt("How many characters would you like your password to be?");
while(passwordLength <=7 || passwordLength >= 128){
  alert("password length must be between 8-128 characters. please try again");
  var passwordLength = prompt("How many characters would you like your password to be?");
  }

  var confirmUpperCase = confirm("Click OK if you would like to include uppercase");
  var confirmLowerCase = confirm("Click OK if you would like to include lowercase");
  var confirmNumber = confirm("Click OK if you would like to include numbers");
  var confirmSpecialChar = confirm("Click OK if you would like to include special characters");


while (!confirmUpperCase && !confirmLowerCase && !confirmNumber && !confirmSpecialChar) {
  alert("You must select at least one character type!");

  var confirmUpperCase = confirm("Click OK if you would like to include uppercase");
  var confirmLowerCase = confirm("Click OK if you would like to include lowercase");
  var confirmNumber = confirm("Click OK if you would like to include numbers");
  var confirmSpecialChar = confirm("Click OK if you would like to include special characters");
  }
  
};
  // var confirmLength = (prompt("How many characters would like your password to contain?"));

  // 1. prompt the user for the password critaria 
  //    a. password length 8 < 128
  //    b. lowercase, uppercase, numbers, special characters
  // 2. validate the input
  // 3. generate password 
  
  // 4. display password
  // return "Generated password will go here!";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
