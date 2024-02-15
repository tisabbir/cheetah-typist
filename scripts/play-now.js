function handleKeyboardButtonPress(){
    console.log('button pressed')
}

document.addEventListener('keyup',handleKeyboardButtonPress);

function gameLoop(){
    // Generate a random letter
    const letter = getARandomLetter();
    console.log('your random letter is : ', letter)
    // set Randomly generated alphabet to screen
    const currentLetter = document.getElementById('screen-letter');
    currentLetter.innerText = letter;

    // setBackground color of the text
    setBackgroundColorById(letter);
}
function playNow(){
        hideElementById('home')
        showElementById('play-ground')
        gameLoop();
}