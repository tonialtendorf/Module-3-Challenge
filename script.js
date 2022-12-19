
// Assignment Code
var generateBtn = document.querySelector("#generate");


// Assignment of arrays for password criteria

var specialCharacters = ['!', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', "`", '{', '|', '}', '~'];
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var confirmLength = "";
var confirmSpecialCharacters;
var confirmuppercaseCharacters;
var confirmlowercaseCharacters;
var confirmnumberCharacters;

// Pop up prompts: length of password
function generatePassword() {
var confirmLength = (prompt("Confirm length of password between 8-128 characters."));
}
 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);