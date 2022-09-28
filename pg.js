// generate password using list of letters (could possibly add accepted signs to the list later)

const listOfLetters = "AaBbCcDdEeFfGgEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtWwXxYyZz";
const symbols = "!@#$%^&*()_-+={[}]:;.?"
const numbers = "0123456789"
const allCharactersSymbols = listOfLetters + symbols
const allCharactersNumbers = listOfLetters + numbers
const allCharactersAndNumbers = listOfLetters + symbols + numbers
const checkboxSymbols = document.querySelector("#symbolsIncluded");
const checkboxnumbers = document.querySelector("#numbersCheckbox");
const sliderValue = document.querySelector("#sliderRange");
const sliderValueOutput = document.querySelector("#demo");
const textInputed = document.querySelector("#inputText");
const infoTextBox = document.querySelector("#infoText");

// create a random number using Math.random() then Math.floor() to transfer from float to integer

function createRandomNum(n) {
    let random = Math.random();
    random = Math.floor(random * n) + 1;
    return random
}

// the main function that uses the above function to choose a random index from list
// the function checks if any of the boxes is clicked, both or none before processing

function generatePassword(numberOfCharacters) {
    let newPass = [];
    if (checkboxSymbols.checked === false && checkboxnumbers.checked === false) {
        for (let i = 0; i < numberOfCharacters; i++) {
            newPass.push(listOfLetters[createRandomNum(listOfLetters.length - 1)]);
        }
        return newPass.join("")
        //   } else if (identifier == "lettersNumbers") {

    } else if (checkboxSymbols.checked === true && checkboxnumbers.checked === false) {
        for (let i = 0; i < numberOfCharacters; i++) {
            let symbolToPush = allCharactersSymbols[createRandomNum(allCharactersSymbols.length - 1)].toString()
            newPass.push(symbolToPush);
        }
        return newPass.join("")
    } else if (checkboxSymbols.checked === false && checkboxnumbers.checked === true) {
        for (let i = 0; i < numberOfCharacters; i++) {
            let symbolToPush = allCharactersNumbers[createRandomNum(allCharactersNumbers.length - 1)].toString()
            newPass.push(symbolToPush);
        }
        return newPass.join("")
    } else {
        for (let i = 0; i < numberOfCharacters; i++) {
            let symbolToPush = allCharactersAndNumbers[createRandomNum(allCharactersAndNumbers.length - 1)].toString()
            newPass.push(symbolToPush);
        }
        return newPass.join("")
    }
}

// get the value from slider, then use function generatepassword to generate a password

function clicked() {
    const textValue = textInputed.value;
    const numberInputed = sliderValueOutput.innerHTML;

    if (textValue.length < 1) {

        let randomPassword = generatePassword(numberInputed);
        document.getElementById("resultText").innerHTML = randomPassword;
    }
    else if (textValue.length >= 1) {
        // check the length of the text compared to the final digits needed
        if (textValue.length == numberInputed) {

            infoTextBox.innerHTML = "This password is too weak. Try increasing the number of digits. Here is a better " + numberInputed + " digit password";
            let randomPassword = generatePassword(numberInputed);
            document.getElementById("resultText").innerHTML = randomPassword;

        } else if (textValue.length > numberInputed) {

            infoTextBox.innerHTML = "The word is more than the number of digits needed. Try using a smaller word or here is a better " + numberInputed + " digit password";
            let randomPassword = generatePassword(numberInputed);
            document.getElementById("resultText").innerHTML = randomPassword;

        } else if (textValue.length < numberInputed) {

            let remainingRandomDigits = numberInputed - textValue.length;

            infoTextBox.innerHTML = "We have pimped your word and created a strong password";
            let randomPassword = generatePassword(remainingRandomDigits);
            document.getElementById("resultText").innerHTML = textValue + randomPassword;
        } else {

            infoTextBox.innerHTML = "Something is wrong. Please make sure you choose a number of digits and a word if needed and try again!";

        }
    }
}

// pressing Enter runs the code

document.addEventListener("keydown", function (e) {
    if (e.key === 'Enter') {
        clicked()
    }
})

// stop spaces in input 

document.addEventListener("keydown", function (e) {
    if (e.keyCode == 32) { 
        e.preventDefault();
        return false };
})

// using a instance of ClipboardJS library

const clipboard = new ClipboardJS('.btn');

// slider value to show next to number

sliderValue.oninput = function () {
    sliderValueOutput.innerHTML = sliderValue.value;
}

// function to use incase a word is inputed for password

