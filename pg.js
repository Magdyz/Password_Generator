// generate password using list of letters (could possibly add accepted signs to the list later)

const listOfLetters = "AaBbCcDdEeFfGgEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtWwXxYyZz";
const symbols = "!@#$%^&*()_-+={[}]|:;<,>.?/"
const allCharacters = listOfLetters + symbols
let newPass = [];

// create a random number using Math.random() then Math.floor() to transfer from float to integer

function createRandomNum(n) {
    let random = Math.random();
    random = Math.floor(random * n) + 1;
    return random
}

// the main function that uses the above function to choose a random index from list

function generatePassword(numberOfCharacters, identifier) {
    if (identifier == "letters") {
        for (let i = 0; i < numberOfCharacters; i++) {
            newPass.push(listOfLetters[createRandomNum(listOfLetters.length - 1)]);
        }
        return newPass.join("")
    } else {
        for (let i = 0; i < numberOfCharacters; i++) {
            newPass.push(allCharacters[createRandomNum(allCharacters.length - 1)]);
        }
        return newPass.join("")
    }
}

// inputs 
function clearForms() {
    document.getElementById("resultText").innerHTML = "";
    //document.getElementById("inputText").value= "";
    


}




// generate password using list of letters (could possibly add accepted signs to the list later)

const listOfLetters = "AaBbCcDdEeFfGgEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtWwXxYyZz";
const symbols = "!@#$%^&*()_-+={[}]|:;<,>.?/"
const allCharacters = listOfLetters + symbols

// create a random number using Math.random() then Math.floor() to transfer from float to integer

function createRandomNum(n) {
    let random = Math.random();
    random = Math.floor(random * n) + 1;
    return random
}

// the main function that uses the above function to choose a random index from list

function generatePassword(numberOfCharacters, identifier) {
    let newPass = [];
    if (identifier == "letters") {
        for (let i = 0; i < numberOfCharacters; i++) {
            newPass.push(listOfLetters[createRandomNum(listOfLetters.length - 1)]);
        }
        return newPass.join("")
    } else {
        for (let i = 0; i < numberOfCharacters; i++) {
            newPass.push(allCharacters[createRandomNum(allCharacters.length - 1)]);
        }
        return newPass.join("")
    }
}


function clicked() {
    const numberInputed = document.getElementById("inputText").value;

    if (document.getElementById("symbolsIncluded").checked == false) {
        
        let randomPassword = generatePassword(numberInputed, "letters");
        document.getElementById("resultText").innerHTML = randomPassword;

    } else {
        let randomPasswordAll = generatePassword(numberInputed, "all");
        document.getElementById("resultText").innerHTML = randomPasswordAll;
        

    }

}



}

function generate(){
    clicked();
}
