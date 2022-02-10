let counterText = document.querySelector(".counter-text");
let numberCounter =0;
counterText.innerHTML=numberCounter

let btnIncrease = document.querySelector("#button-increase");
let btnDecrease = document.querySelector("#button-decrease");

btnIncrease.addEventListener('click',counterFunc)
btnDecrease.addEventListener('click', counterFunc)

function counterFunc(){
    let btnId = this.id
    btnId=="button-increase" ? numberCounter+=1 : numberCounter -=1
    counterText.innerHTML = numberCounter
}