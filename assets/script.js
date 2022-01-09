// Assignment code here
var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("number", numberArray.length);

var loweralpArray = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]
console.log("loweralp", loweralpArray.length)

var upperalpArray = [A, B, C, D, E, F, G, H, I, G, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z]
console.log("upperalp", upperalpArray.length)

//var specialArray = [! , @ , #, $, % , ^ , & , *]
console.log = ("special", specialArray.length)



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