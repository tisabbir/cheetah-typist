function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    // Get the letter in screen
    const currentLetterElement = document.getElementById('screen-letter');
    const expectedLetter = currentLetterElement.innerText.toLowerCase();


    if(playerPressed === expectedLetter){
        console.log('You win the game.')
        removeBackgroundColorById(expectedLetter);
        // Score Update
        scoreUpdater();
        gameLoop();
    } else{
        lifeUpdater();
        console.log('You lost the game')
    }
}

document.addEventListener('keyup',handleKeyboardButtonPress);

function gameLoop(){
    // Generate a random letter
    const letter = getARandomLetter();
    // set Randomly generated alphabet to screen
    const currentLetterElement = document.getElementById('screen-letter');
    currentLetterElement.innerText = letter;

    // setBackground color of the text
    setBackgroundColorById(letter);
}
function playNow(){
        hideElementById('home')
        showElementById('play-ground')
        gameLoop();
}