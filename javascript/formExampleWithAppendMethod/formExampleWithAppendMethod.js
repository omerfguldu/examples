let inputUserName = document.querySelector("#inputKullaniciAdi");
let inputScoreInfo = document.querySelector("#inputNotBilgisi");
let buttonAdd = document.querySelector("#btn-add");
let inputListItem = document.querySelector(".inputList");
buttonAdd.addEventListener('click', buttonAddFunc);
let alert = document.querySelector("#div-alert");

// FUNCTION THAT ADDS ALERT TEXT TO ALERT DIV
let alertFunction = (alertText) => {
    const ALERT = `
    <strong>HATA!</strong> ${alertText}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
    `
    alert.innerHTML = ALERT;
}

// FUNCTION THAT CONTROLS THE INPUTS AND IF THERE IS NO MISTAKE THEN SEND THE VALUES TO addItemsToList FUNCTION
function buttonAddFunc(event) {
    event.preventDefault(); // DEFAULT EVENT PREVENTED
    let userNameValue = inputUserName.value
    let scoreValue = inputScoreInfo.value;
    if (userNameValue && scoreValue) { // IF BOTH INPUTS HAVE VALUES
        if(scoreValue>=0 && scoreValue <=100){ // IF SCORE BETWEEN 0-100, CALL THE addItemsToList FUNCTION
            addItemsToList(userNameValue, scoreValue);
            alert.classList.remove("show"); 
        }
        else{ // ELSE CALL ALERTFUNCTION WITH ALERTTEXT PARAMETER
            alertFunction('Not bilgisi 0-100 arasında olmalıdır.');
            alert.classList.add("show");
        }
    }
    else { // IF ONE OF THE TWO INPUTS OR BOTH INPUTS ARE EMPTY THEN CALL ALERTFUNCTION WITH ALERTTEXT PARAMETER 
        alertFunction('Kullanıcı adı veya not bilgisi boş bırakılamaz.');
        alert.classList.add("show");
    }
}

// FUNCTION THAT ADDS INPUT VALUES INSIDE UL ELEMENT
function addItemsToList(userNameValue, scoreValue) {
    let liItem = document.createElement(`li`); // CREATE LI ELEMENT
    inputListItem.appendChild(liItem); // ADD LI ELEMENT AS LIST ITEMS LAST CHILD
    liItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center"); // ADD SOME CLASSES TO LI ELEMENT
    liItem.innerHTML = `${userNameValue} <span class="badge badge-primary badge-pill">${scoreValue}</span>`; // ADD VALUES WHERE THEY COME FROM THE PARAMETERS TO LI ELEMENT
    document.getElementById("myForm").reset(); // CLEAR INPUT VALUES
}