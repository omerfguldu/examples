let firstName,lastName,pickedColor;

// Select Menu Color Change Event
let selectedColor = document.querySelector("#colors")
selectedColor.addEventListener('change',selectBox)

function selectBox(event){
    console.log("Etkinlik Tipi : " + event.type);
    pickedColor = `Selected Color : ${event.target.value}`
}

// First Name Input Event  
const nameValue = (namevalue) => {
    firstName = `First Name : ${namevalue.target.value}`;
}

let nameInput = document.querySelector("#fname");
nameInput.addEventListener('input',nameValue);

// Last Name Input Event
let lnameInput = document.querySelector("#lname");
lnameInput.addEventListener('input', lnameValue);

function lnameValue(lnamevalue){
    lastName =`Last Name : ${lnamevalue.target.value}`;
}

// Button Submit Click Event
let buttonSubmit = document.querySelector("#btn-submit");
buttonSubmit.addEventListener('click', buttonSubmitClicked);

function buttonSubmitClicked(){
    alert(firstName + "\n" + lastName + "\n" + pickedColor);
}

