// Assignment code here
var numberArray = "0123456789"
console.log("number" + numberArray.length);

var loweralpArray = "abcdefghijklmnopqrstuvwxyz"
console.log("loweralp" + loweralpArray.length)

var upperalpArray = "ABCDEFGHIGKLMNOPQRSTUVWXYZ"
console.log("upperalp" + upperalpArray.length)

var specialArray = "!@#$%^&*"
console.log("special" + specialArray.length)



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
    var charbase = ""
    var genetors = ""
    //When prompted for the length of the password
    //Then choose a length of at least 8 characters and no more than 128 characters
    var passLength = prompt("How long would you like the password to be? Pick between 8 - 128 characters.")
    var lowercase = confirm("Would you like to include lower case characters in the password? ")
    if (lowercase === true) {
        charbase = charbase + loweralpArray

    }
    var uppercase = confirm("Would you like to include upper case characters in the password")
    if (uppercase === true) {
        charbase = charbase + upperalpArray
    }
    var numbers = confirm("Would you like to include numbers in the password?")
    if (numbers === true) {
        charbase = charbase + numberArray
    }
    var special = confirm("Would you like special characters in your password?")
    if (special === true) {
        charbase = charbase + specialArray
    }

    console.log(passLength, lowercase, uppercase, numbers, special, charbase);
    for (let i = 0; i < passLength; i++) {
        genetors = genetors + charbase.charAt(Math.floor(Math.random() * charbase.length))

    }
    return genetors



}
console.log("anything")