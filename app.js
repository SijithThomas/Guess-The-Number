let randNum=parseInt((Math.random()*100)+1);
const inpNum=document.querySelector('#guess_feild');
const submit=document.querySelector('#submit_btn');
const prevGuesses=document.querySelector('.prev_guesses');
const remGuesses=document.querySelector('.rem_geusses');
const resultOp=document.querySelector('.result_output');
const resultBox=document.querySelector('.result_box');
const playBtn=document.createElement('button');
let prevNum=[];
let playGame=true;
let remnum=1;

if(playGame)(
    submit.addEventListener('click',function(e){
        e.preventDefault();
        //grabing the entered num
        const gusValue=parseInt(inpNum.value);
        validateGuesses(gusValue); //passing the value to the function
    })
)
function validateGuesses(gusValue){
    if(isNaN(gusValue)){
        alert('Please Enter A valid number');
    }
    else if(gusValue<1){
        alert('Please enter a number greater than 1!');
    }
    else if(gusValue>100){
        alert('Please enter a number less than 100!');
    }
    else{
        // pushing the prev value into the array
        prevNum.push(gusValue);

        if(remnum == 11){
          displayMessage(`The game is over! The number was ${randNum}`);
          displayGuesses(gusValue);
        }
        else{
            displayGuesses(gusValue);
            checkGuesses(gusValue);
        }
    }
    
}
function checkGuesses(gusValue){
    console.log(randNum);
    if(gusValue === randNum){
        displayMessage(`You guessed correctly`);
        endGame();
    }
    else if(gusValue < randNum ){
        displayMessage(`Too Low! Try Again`);
    }
    else if(gusValue > randNum ){
        displayMessage(`Too High! Try Again`);
    }

}
function displayGuesses(gusValue){
    console.log(gusValue);
    inpNum.value= ' ';
    prevGuesses.innerHTML += `${gusValue} `;
    remnum++;
    remGuesses.innerHTML=`${11-remnum}`;
}

function displayMessage(message){
    resultOp.innerHTML=`<h1>${message}</h1>`;
    resultOp.classList.add('active');
}
function endGame(){
    inpNum.value= ' ';
    playBtn.classList.add('button');
    playBtn.innerHTML=`New Game`;
    resultBox.appendChild(playBtn);
    playGame=false;
    newGame();
}
function newGame(){
    const newgameBtn=document.querySelector('.button');
    newgameBtn.addEventListener('click', ()=>{
        randNum=parseInt((Math.random()*100)+1);
        remnum=1;
        prevGuesses.innerHTML=' ';
        remGuesses.innerHTML=`${11-remnum}`;
        resultOp.innerHTML= ' ';
        resultOp.classList.remove('active');
        resultBox.removeChild(playBtn);
        let playGame=true;
    })
}
