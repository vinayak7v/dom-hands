//"text"
let id = document.getElementById('text');
console.log(id.innerHTML);


//"Tag"
const h1Val = document.getElementsByTagName('h1');
console.log(h1Val[0].innerText);

//"Class"
let classStore = document.getElementsByClassName('box');
console.log(classStore[2].innerText);


//text change 'Hello' to "Hello World"
let text = document.querySelector('h4')
 text.addEventListener('click' , () =>(
    text.innerText = 'Hello World'
)
);

// text change 'Hello World' to 'Welcome to elevation academy' 
 function changeText(){
   let text = document.querySelector('h5')
   text.innerText = 'Welcome to elevation academy'
 };

// text change 'Hello World' to 'Welcome to elevation academy' with color
let change = document.querySelector('h2')
    change.addEventListener('click' ,function (){ 
    change.innerText = 'Welcome to elevation academy'
    change.style.color = "red"
})



 
//Cards
function direction() {
  let changeDimension = document.getElementsByClassName('parentCard');
  changeDimension[0].style.flexDirection = 'column'
}


//clock
  
setInterval(myFunction, 1000); 
function myFunction() {

var DateObj = new Date();
var hour = DateObj.getHours();
var minute = DateObj.getMinutes();
var seconds = DateObj.getSeconds();

if (hour >= 12) {
hour = hour - 12;
}

if (hour < 10) {
hour = "0" + hour;
}

if (minute < 10) {
minute = "0" + minute;
}

if (seconds < 10) {
seconds = "0" + seconds;
}

document.getElementById("time").innerText = `${hour} : ${minute} :${seconds}`;

}