


function updateClock() {
    const now = new Date();
    let day = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0)
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    month = now.getMonth().toString().padStart(2, 0);
    const dayString = `${day}/${month}/${year}`
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`
    document.getElementById("clock").textContent = timeString;
    document.getElementById("date").textContent = dayString;
}

updateClock();

setInterval(updateClock, 1000);







myButton = document.getElementById("myButton");

label1 = document.getElementById("label1");
label2 = document.getElementById("label2");
label3 = document.getElementById("label3");


let randomNum;
let min = 1;
let max = 6;

myButton.onclick = function (){
   randomNum = Math.floor(Math.random() * max) + min;
   label1.textContent = randomNum;
}

const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temp;

function convert(){
if(toFahrenheit.checked){
    temp = Number(textBox.value);
    temp = temp * 9 / 5 + 32;
    result.textContent = temp.toFixed(1) + "F"
}
else if(toCelsius.checked){
    temp = Number(textBox.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + "C"
}
else{
    result.textContent = "select a unit";
}
};



function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() *6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png">`);

    }
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}

