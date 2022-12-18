// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assignment of arrays for password criteria
var passwordLength = [""];
var specialCharacters = ['!', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', "\\", ']', '^', '_', "`", "{", '|', "}", '~'];
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


function generatePassword() {
  console.log("Hey! You clicked the button")
}



//1. prompt the user for password criteria
//  a. password length 8 < 128 characters
//  b. lowercase, uppercase, numbers, special characters
//2. validate the input
//3. generate password based on criteria


//4. display generated password to page 
  return "Generated password will go here!"


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_addeventlistener_displaydate
generateBtn.addEventListener("click", writePassword);

