// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// variable declarations 
var passwordLength = "";
var confirmSpecialChar;
var confirmNumber;
var confirmUpperCase;
var confirmLowerCase;

var LowerCaseLetters = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var upperCaseLetters = LowerCaseLetters.map(letter => letter.toUpperCase())
// console.log("uppercaseletters: ", upperCaseLetters);

// for (var i = 0; i < LowerCaseLetters.length; i++) {
//   var capLetters = LowerCaseLetters[i].toUpperCase();
//   upperCaseLetters.push(capLetters);
// }

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/","=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// prompt for password criteria 
function generatePassword(){
  // var passwordCritaria = alert("Your password should have uppercase, lowercase, numbers, spacecial characters and must be between 8-128 characters.");

  // prompt for How many characters would like your password to contain
  var passwordLength = prompt("How many characters would you like your password to be? Password must be between 8-128 characters");
while(passwordLength <=7 || passwordLength >= 128){
  alert("password length must be between 8-128 characters. please try again");
  var passwordLength = prompt("How many characters would you like your password to be?");
  }

  // confirm the criteria choices
  var confirmUpperCase = confirm("Click OK if you would like to include uppercase");
  var confirmLowerCase = confirm("Click OK if you would like to include lowercase");
  var confirmNumber = confirm("Click OK if you would like to include numbers");
  var confirmSpecialChar = confirm("Click OK if you would like to include special characters");

  var userChoices = {
    passwordLength: passwordLength,
    confirmUpperCase: confirmUpperCase,
    confirmLowerCase: confirmLowerCase,
    confirmNumber: confirmNumber,
    confirmSpecialChar: confirmSpecialChar

  }

// loop if the choices are not true
while (!confirmUpperCase && !confirmLowerCase && !confirmNumber && !confirmSpecialChar) {
  alert("You must select at least one character type!");

  // confirm the criteria choices
  var confirmUpperCase = confirm("Click OK if you would like to include uppercase");
  var confirmLowerCase = confirm("Click OK if you would like to include lowercase");
  var confirmNumber = confirm("Click OK if you would like to include numbers");
  var confirmSpecialChar = confirm("Click OK if you would like to include special characters");user
  }


  // atleas one character should be selected
  if (!confirmUpperCase && !confirmLowerCase && !confirmNumber && !confirmSpecialChar) {
    passwordChoice = alert("At least one character type should be selected");
  };

  // var result = [];
  var userOptions = [];

  // var allChoices = [];

  if(userChoices.confirmUpperCase) {
    userOptions = userOptions.concat(upperCaseLetters);
    // allChoices.push(randomize(upperCaseLetters))
    // console.log(userOptions);
  }

  if(userChoices.confirmLowerCase) {
    userOptions = userOptions.concat(LowerCaseLetters);
    // console.log(userOptions);
    // allChoices.push(randomize(LowerCaseLetters))
  }

  if(userChoices.confirmNumber) {
    userOptions = userOptions.concat(numbers);
    // console.log(userOptions);
    // allChoices.push(randomize(numbers))
  }

  if(userChoices.confirmSpecialChar) {
    userOptions = userOptions.concat(specialCharacter);
    // console.log(userOptions);
  //   allChoices.push(randomize(specialCharacter))
  }


var randomize = [];
  for (var i = 0; i < passwordLength; i++) {
    randomize = randomize + userOptions[Math.floor(Math.random() * userOptions.length)];
    // console.log(randomize)
}
return randomize;

  
};



