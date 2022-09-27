// generate password using list of letters (could possibly add accepted signs to the list later)

const listOfLetters = "AaBbCcDdEeFfGgEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtWwXxYyZz";
const symbols = "!@#$%^&*()_-+={[}]:;.?"
const numbers = "0123456789"
const allCharactersSymbols = listOfLetters + symbols
const allCharactersNumbers = listOfLetters + numbers
const allCharactersAndNumbers = listOfLetters + symbols + numbers
const checkboxSymbols = document.querySelector("#symbolsIncluded");
const checkboxnumbers = document.querySelector("#numbersCheckbox");


// create a random number using Math.random() then Math.floor() to transfer from float to integer

function createRandomNum(n) {
    let random = Math.random();
    random = Math.floor(random * n) + 1;
    return random
}

// the main function that uses the above function to choose a random index from list

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


function clicked() {
    const numberInputed = document.getElementById("inputText").value;

    if (checkboxSymbols.checked == false) {

        let randomPassword = generatePassword(numberInputed);
        document.getElementById("resultText").innerHTML = randomPassword;

    } else {
        //const numberInputed = document.getElementById("inputText").value;
        let randomPasswordAll = generatePassword(numberInputed);
        document.getElementById("resultText").innerHTML = randomPasswordAll;
    }
}

// pressing Enter runs the code

document.addEventListener("keydown", function (e) {
    if (e.key === 'Enter') {
        clicked()
    }
})
const clipboard = new ClipboardJS('.btn');
