// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// variable declarations 
var passwordChoice;
var passwordLength = "";
var confirmSpecialChar;
var confirmNumber;
var confirmUpperCase;
var confirmLowerCase;

var LowerCaseLetters = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseLetters = LowerCaseLetters.toUpperCase;
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/","=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// prompt for password criteria 
function generatePassword(){
  var passwordCritaria = alert("Your password should have uppercase, lowercase, numbers, spacecial characters and must be between 8-128 characters.");

  // prompt for How many characters would like your password to contain
  var passwordLength = prompt("How many characters would you like your password to be?");
while(passwordLength <=7 || passwordLength >= 128){
  alert("password length must be between 8-128 characters. please try again");
  var passwordLength = prompt("How many characters would you like your password to be?");
  }

  // confirm the criteria choices
  var confirmUpperCase = confirm("Click OK if you would like to include uppercase");
  var confirmLowerCase = confirm("Click OK if you would like to include lowercase");
  var confirmNumber = confirm("Click OK if you would like to include numbers");
  var confirmSpecialChar = confirm("Click OK if you would like to include special characters");

// loop if the choices are not true
while (!confirmUpperCase && !confirmLowerCase && !confirmNumber && !confirmSpecialChar) {
  alert("You must select at least one character type!");

  // confirm the criteria choices
  var confirmUpperCase = confirm("Click OK if you would like to include uppercase");
  var confirmLowerCase = confirm("Click OK if you would like to include lowercase");
  var confirmNumber = confirm("Click OK if you would like to include numbers");
  var confirmSpecialChar = confirm("Click OK if you would like to include special characters");
  }

  

// atleas one character should be selected
  if (!confirmUpperCase && !confirmLowerCase && !confirmNumber && !confirmSpecialChar) {
    passwordChoice = alert("At least one character type should be selected");
  } else if (confirmUpperCase && confirmLowerCase && confirmNumber && confirmSpecialChar) {
    passwordChoice = LowerCaseLetters.concat(upperCaseLetters, numbers, specialCharacter);
    console.log(passwordChoice);
  }

  var randomPassword = ""
// loop for random password
  for (var i = 0; i < passwordLength; i++) {
  randomPassword = randomPassword + passwordChoice[Math.floor(Math.random() * passwordChoice.length)];

   }
  
};


