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
    console.log(scoreText);
    let score = parseInt(scoreText);
    console.log(score);
    score++;
    console.log(score);
    document.getElementById('score-value').innerText = score.toString();
}
function lifeUpdater(){
    let lifeText = document.getElementById('life-value').innerText;
    console.log(lifeText);
    let life = parseInt(lifeText);
    console.log(life);
    life--;
    console.log(life);
    document.getElementById('life-value').innerText = life.toString();
}
