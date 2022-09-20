// generate password using list of letters (could possibly add accepted signs to the list later)

const listOfLetters = "AaBbCcDdEeFfGgEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtWwXxYyZz";
let newPass = [];

// create a random number using Math.random() then Math.floor() to transfer from float to integer

function createRandomNum(n){
	let random = Math.random();
	random = Math.floor(random*n)+1;
	return random
}

// the main function that uses the above function to choose a random index from list

function generatePassword(numberOfCharacters) {
	for (let i = 0; i < numberOfCharacters;i++){
	newPass.push(listOfLetters[createRandomNum(listOfLetters.length-1)]);
}
	return newPass.join("")
