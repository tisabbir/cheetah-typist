function hideElementById(elementId){
    document.getElementById(elementId).classList.add('hidden');
}
function showElementById(elementId){
    document.getElementById(elementId).classList.remove('hidden');
}

function getARandomNumber(){
    const Num = Math.random()*26;
    const randomNum = Math.round(Num);
    return randomNum;

}
function getARandomLetter(){
    const letter = 'qwertyuiopasdfghjklzxcvbnm/';
    const letterArr = letter.split('');
    const randomLetter = letterArr[getARandomNumber()];
    return randomLetter;
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}


// Score Update function
function scoreUpdater(){
    let scoreText = document.getElementById('score-value').innerText;
    let score = parseInt(scoreText);
    score++;
    document.getElementById('score-value').innerText = score.toString();
}
function lifeUpdater(){
    let lifeText = document.getElementById('life-value').innerText;
    let life = parseInt(lifeText);
    life--;
    document.getElementById('life-value').innerText = life.toString();
    return life;
}

