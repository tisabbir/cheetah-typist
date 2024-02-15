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
