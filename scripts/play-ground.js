// // ## Play-Ground Steps

// // - watch what is in the screen
// //     - get the letter in screen
       
// //     - store it in a variable
// const screenLetter = document.getElementById('screen-text').innerText;
// // console.log(screenLetter)
// // - Type that key in the keyboard
// //     - if the key is matched with the key of screen increase the score and show next random letter and do it again and again
// //         - get the key pressed in keyboard
//             document.addEventListener('keypress', function(event){
//                 const pressedKey = event.key;

//                 // console.log(event.key.toLocaleLowerCase());

//                 document.getElementById(event.key.toString()).style.backgroundColor = 'orange'
                
//                 let scoreValue = parseInt(document.getElementById('score-value').innerText);
//                 for(let i=0; i<=100 ; i++){
//                     if(event.key.toLowerCase() === screenLetter.toLowerCase()){
//                         console.log(scoreValue);
//                         console.log('matched');
//                         scoreValue++;
//                     } else{
//                         console.log('not matched')
//                     }
//                 }
//             })
// //         - store it in a var
// //         - compare this two letter
// //         - when matched :
// //         - increase score
// //         - save the score
// //         - show the next random letter in the screen
// //         - loop this
// //     - else go to score ui, show the current score
// //         - When not Matched :
// //             - go to the score page
// //             - show current score