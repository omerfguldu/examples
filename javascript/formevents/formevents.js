let userForm = document.querySelector("#form-user-info");
userForm.addEventListener('submit', submitFunction);

let nameInput = document.querySelector("#fname");
let surnameInput = document.querySelector("#lname");
let telInput = document.querySelector("#telno");
let addressInput = document.querySelector("#address");

function submitFunction(e){
    e.preventDefault();
    console.log(nameInput.value);
    console.log(surnameInput.value);
    console.log(telInput.value);
    console.log(addressInput.value);
}