let ramdomNumber = parseInt(Math.random() *100) + 1;
 let chance = 100;
 let highScore = 0;
 console.log(ramdomNumber);
 let chanceValue = document.getElementById('chance');
 chanceValue.innerText = `Chances: ${chance}`;
 let guess = document.getElementById('guess');
 let inp = document.querySelectorAll('input');
 let btn = document.getElementById('btn');
 let ramdomNum = document.getElementById('ramdomNum'); 
 let bd = document.getElementsByClassName("bd")[0];
 let highScoreVal = document.getElementById('highScore');
 highScoreVal.innerText = `Highscore : ${highScore}`;


 btn.addEventListener('click', () =>{
  if(ramdomNumber > parseInt(inp[0].value)){
    guess.innerHTML = 'You are too Low!';
    chanceValue.innerText = `Chances: ${chance--}`;
  } else if(ramdomNumber < parseInt(inp[0].value)){
    guess.innerHTML = 'You are too High!';
    chanceValue.innerText = `Chances: ${chance--}`;
  } else {
    bd.style.backgroundColor = 'green';
    ramdomNum.innerHTML = `${ramdomNumber}`;
    guess.innerHTML = '🤩🤩 Hurray You Won 🤩🤩';
    chanceValue.innerText = `Chances: ${chance}`;
    highScoreVal.innerText = `Highscore : ${highScore+chance}`;
  } 
  
 });