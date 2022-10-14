A Clean Password Generator Website Using JavaScript

After learning Python in an amazing journey that took me two years, I've decided to jump into learning JavaScript. Once I learnt how to generate a random number using

```
function createRandomNum( n ) { 
     let random = Math.random(); 
     random = Math.floor( random * n ) + 1; 
     return random 
 }
```

Which is way more steps than the good old Random library in Python, I decided to create a password generator website as a project to practice JS, CSS and HTML.

I started with a simple design with an input box, text box and button. The user enters a value then javascript code generates a random password with capital and small letters according to the length specified.

```
const listOfLetters = "AaBbCcDdEeFfGgEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtWwXxYyZz";

function generatePassword( numberOfCharacters ) { 
     let newPass = [];     // new password list to be converted to string 
          
          for ( let i = 0; i < numberOfCharacters; i++ ) { 
             newPass.push( listOfLetters[ createRandomNum( listOfLetters.length - 1 ) ] ); 
            }        
return newPass.join( "" ) // transform a list into string, final password
} 
```

The function revolves around a 'for loop' that loops through the main list of letters `const listOfLetters = "AaBbCcDdEeFfGgEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtWwXxYyZz";`. I created an empty list `new Pass`. Then, I used the `push()` method to push a random index from the `listOfLetters` to `newPass` list. This worked fine. I was very pleased with the outcome but I had several challenges. 

The input box accepted both letters and numbers which wasn't what I was aiming for. I wanted a number because the function `generatePassword( numberOfCharacters )` only accepts a number of characters. This needed a filter. I found an easy fix for this by using HTML. 

```
<input id="inputText" type="number"
... >
```
By adding `type ="number"` only numbers are accepted. 

This made things a lot better. I finally had a basic password generator. I still had a couple of bugs. Like, what if I wanted to add symbols or numbers! I then added two checkboxes for them. It was easy to add another one for Caps, but I thought any password in 2022 should have a mixture of capitals and normal letters.

At this point, I wanted a straight forward way to check if a box is checked, then do the same process that I used before to get a random index to the new lists. I created one constant for numbers and another one for symbols. A normal list would work here as well, but I thought that was quicker.

```
const symbols = "!@#$%^&*()_-+={[}]:;.?"
const numbers = "0123456789"
```

The main function that generates a password checks the boxes for a state (checked) and chooses a list accordingly. I felt there must be a quicker way to do this, but as this is a project, so I opted for the most obvious solution and it worked.


```
function generatePassword( numberOfCharacters ) {
    let newPass = [];     // new password list to be converted to string
        
    // checks if checkbox is checked before generating password with symbols or numbers

    if ( checkboxSymbols.checked === false && checkboxnumbers.checked === false ) {

        for ( let i = 0; i < numberOfCharacters; i++ ) {
            newPass.push( listOfLetters[ createRandomNum( listOfLetters.length - 1 ) ] );
        }
        return newPass.join( "" ) // transform a list into string, final password

    } else if ( checkboxSymbols.checked === true && checkboxnumbers.checked === false ) {

        for ( let i = 0; i < numberOfCharacters; i++ ) {
            let symbolToPush = allCharactersSymbols[ createRandomNum( allCharactersSymbols.length - 1 ) ].toString()
            newPass.push( symbolToPush );
        }
        return newPass.join( "" )

    } else if ( checkboxSymbols.checked === false && checkboxnumbers.checked === true ) {
        for (let i = 0; i < numberOfCharacters; i++) {
            let symbolToPush = allCharactersNumbers[ createRandomNum( allCharactersNumbers.length - 1 ) ].toString()
            newPass.push( symbolToPush );
        }
        return newPass.join( "" )

    } else {
        for ( let i = 0; i < numberOfCharacters; i++ ) {
            let symbolToPush = allCharactersAndNumbers[ createRandomNum ( allCharactersAndNumbers.length - 1 ) ].toString()
            newPass.push( symbolToPush );
        }
        return newPass.join( "" )
    }
}

```

This was a great working model without any issues. I still felt that writing the number isn't very intuitive. I thought maybe a slider would be a better option and maybe I should also use the input box for adding a custom word. This meant that I needed to add 2 options. As to the slider, I opted for a normal HTML slider then used the output as the input for `generatePassword()` function. I styled it on css to look a bit different from the normal sliders ;)


```
let sliderValueOutput = document.querySelector( "#demo" );

const numberInputed = sliderValueOutput.innerHTML;
```

I also made sure to have a value to start with in order to make it clear how the slider works.

```
        <div class="rangeslider">
            <input type="range" min="6" max="60" value="12" step="1" class="myslider" id="sliderRange">
            <p>characters: <span id="demo"></span></p>
        </div>

```

12 characters seemed like the right medium. 

```
sliderValueOutput.innerHTML = "12";

```

As to the input box, I had to create messages to make things clear and interactive when typing a word to appended to the password. 

I then created a function called `clicked()`. This function checks the length of the inputed text against the slider output to make sure the length of the word inputed is less than the number of characters needed. Otherwise, the program will have to cut the word entered to match the characters needed for the password and not even use the randomisation program, which is useless. I created some messages for each case in order to make sure the website functions as expected. 

```
// get the value from slider, then use function generatepassword to generate a password

function clicked() {
    const textValue = textInputed.value;
    const numberInputed = sliderValueOutput.innerHTML;

    if ( textValue.length < 1 ) {

        // update info text with a message
        infoTextBox.innerHTML = "Say hello to a brand new strong password! For an even stronger password, mark both symbols and numbers";
        
        // generate random password using the value inputed 
        let randomPassword = generatePassword( numberInputed );
       
        // update result text with a password        
        document.getElementById( "resultText" ).innerHTML = randomPassword;
    }
    else if ( textValue.length >= 1 ) {

        // check the length of the text entered compared to the digits needed
        if ( textValue.length == numberInputed ) {

            // update info text with a message
            infoTextBox.innerHTML = "This password is weak. Try increasing the number of characters. Here is a better " + numberInputed + " digit password";
            
            // generate random password using the value inputed 
            let randomPassword = generatePassword( numberInputed );
            
            // update result text with a password
            document.getElementById( "resultText" ).innerHTML = randomPassword;

        } else if ( textValue.length > numberInputed ) {

            infoTextBox.innerHTML = "The word is more than the number of characters needed. Try using a smaller word or here is a better " + numberInputed + " digit password";
            let randomPassword = generatePassword(numberInputed);
            document.getElementById( "resultText" ).innerHTML = randomPassword;

        } else if ( textValue.length < numberInputed ) {
            
            // if text is less than number of digits needed calculate the difference and
            // generate a random rest of password for the word added
            let remainingRandomDigits = numberInputed - textValue.length;

            infoTextBox.innerHTML = "We have pimped your word and created a strong password";
            let randomPassword = generatePassword( remainingRandomDigits );
            document.getElementById( "resultText" ).innerHTML = textValue + randomPassword;

        } else {

            infoTextBox.innerHTML = "Something is wrong. Please make sure you choose a number of digits and a word if needed and try again!";
        }
    }
}

```

At this point everything looked absolutely fine. I still wanted some nice things to make the website relevant when it comes to functionality. I needed 

- A copy button to copy the newly created password.
- When a user presses 'Enter' on keyboard the code runs. 

I found a nice library for the copy button. 

```
// using a instance of ClipboardJS library

const clipboard = new ClipboardJS( '.btn' );

```
And for the Enter button, I created a simple Event Listener to run the code when keyboard is pressed `keydown`. 

```
// pressing Enter runs the code

document.addEventListener( "keydown", function ( e ) {
    if ( e.key === 'Enter' ) {
        clicked()
    }
} )
```

That's it. With some styling the website elprivacy.com was born. I think I will keep updating it as I learn more Javascript, but for now, it does the job, which is great! 

I also made the repository public on github, with clear comments in order to maybe help someone else. 

[Repository on Github](https://github.com/Magdyz/passwordGenerator)

I hope this helped! Happy coding!

Magdy
