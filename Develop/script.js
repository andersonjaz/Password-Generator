// Assignment code here

//All possible characters
const key_strings = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  specialcharacters: "!@#$%^&*",
};

//generate password
function generatePassword() {
  var passwordCharSet = "";

  //Ask length of password
  var length = window.prompt("How many characters for your password?");

  //Ask if lowercase letters
  var lowercase = window.confirm("Do you want to include lowercase letters?");
  if (lowercase) {
    passwordCharSet += key_strings.lowercase;
  };

  //Ask if uppercase letters
  var uppercase = window.confirm("Do you want to include uppercase letters?");
  if (uppercase) {
    passwordCharSet += key_strings.uppercase;
  };

  //Ask to include special characters
  var specialcharacters = window.confirm("Do you want to include special characters?");
  if (specialcharacters) {
    passwordCharSet += key_strings.specialcharacters;
  };

  // Ask to include numbers
  var numbers = window.confirm("Do you want to use numbers?");
  if (numbers) {
    passwordCharSet += key_strings.number;
  };

  //Generate password based on responses
  var password = "";
  for (let i = 0; i < length; i++) {
    password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  }
  return password;
}

console.log(generatePassword());

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
