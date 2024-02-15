function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    //escape 

    if(playerPressed == 'Escape'){
        gameOver();
    } 
    
    // Get the letter in screen
    const currentLetterElement = document.getElementById('screen-letter');
    const expectedLetter = currentLetterElement.innerText.toLowerCase();


    if(playerPressed === expectedLetter){
        removeBackgroundColorById(expectedLetter);
        // Score Update
        scoreUpdater();
        gameLoop();
    } else{
       const updatedLife = lifeUpdater();
       if(updatedLife<=0){
        removeBackgroundColorById(expectedLetter);

        gameOver();
       }
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
    hideElementById('score-section')


    // Set the value of the life and score to 5 and 0;
    document.getElementById('score-value').innerText = 0;
    document.getElementById('life-value').innerText = 5;
        showElementById('play-ground')
        gameLoop();
}

function gameOver(){
    // document.getElementById('final-score').innerText = score;
    hideElementById('play-ground')
    showElementById('score-section')
    // update final score
    let scoreText = document.getElementById('score-value').innerText;
    console.log(scoreText);
    document.getElementById('final-score').innerText = scoreText;
}