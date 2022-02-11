let userForm = document.querySelector("#form-user-info");
userForm.addEventListener('submit', submitFunction);

function submitFunction(e){
    e.preventDefault();
    console.log("işlem");
}