// Assignment code here
console.log(shyla);


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

function generatePassword() {

    //When prompted for the length of the password
    //Then choose a length of at least 8 characters and no more than 128 characters
    var passLength = prompt("How long would you like the password to be? Pick between 8 - 128 characters.")
    var lowercase = confirm("Would you like to include lower case characters in the password? ")
    var uppercase = confirm("Would you like to include upper case characters in the password")
    var numbers = confirm("Would you like to include numbers in the password?")
    var special = confirm("Would you like special characters in your password?")

    console.log(passLength, lowercase, uppercase, numbers, special);

    alert();


}