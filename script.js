
// Assignment Code
var generateBtn = document.querySelector("#generate");


// Assignment of arrays for password criteria

var specialCharacters = ['!', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', "`", '{', '|', '}', '~'];
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


// Pop up text prompts: length of password
//https://www.w3schools.com/js/js_loop_while.asp
function generatePassword() {
  var confirmLength = (prompt("Confirm length of password between 8-128 characters."));
  while(confirmLength < 8 || confirmLength > 128) {
    alert("Password length must be between 8-128 characters.");  
    var confirmLength = (prompt("Please reconfirm length of password between 8-128 characters."));
  }

// Pop up confirm prompts: selecting characters
  var confirmSpecialCharacters = (confirm("Confirm if you would like to include special characters."));
  var confirmuppercaseCharacters = (confirm("Confirm if you would like to include uppercase characters."));
  var confirmlowercaseCharacters = (confirm("Confirm if you would like to include lowercase characters."));
  var confirmnumberCharacters = (confirm("Confirm if you would like to include numerical characters."));

// if no prompts are selected- reconfirm confirm pop ups
    while(confirmSpecialCharacters === false && confirmuppercaseCharacters === false && confirmlowercaseCharacters === false && confirmnumberCharacters === false) {
      alert("You must select at least one criteria to generate your password.");
      var confirmSpecialCharacters = (confirm("Confirm if you would like to include special characters."));
      var confirmuppercaseCharacters = (confirm("Confirm if you would like to include uppercase characters."));
      var confirmlowercaseCharacters = (confirm("Confirm if you would like to include lowercase characters."));
      var confirmnumberCharacters = (confirm("Confirm if you would like to include numerical characters."));
  }

//concat password
var confirmPassword = []
  if (confirmSpecialCharacters) {
    confirmPassword = confirmPassword.concat(specialCharacters)
  }
  if (confirmuppercaseCharacters) {
    confirmPassword = confirmPassword.concat(uppercaseCharacters)
  }
  if (confirmlowercaseCharacters) {
    confirmPassword = confirmPassword.concat(lowercaseCharacters)
  }
  if (confirmnumberCharacters) {
    confirmPassword = confirmPassword.concat(numberCharacters)
  }


//loop for final password
//https://www.w3schools.com/js/js_random.asp
  var finalPassword = ""
  for (var i = 0; i < confirmLength; i++) {
  finalPassword = finalPassword + confirmPassword[Math.floor(Math.random() * confirmPassword.length)];
  }
  // end function and return final value
  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);