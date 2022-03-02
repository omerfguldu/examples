let tableEl = document.querySelector("#todosTable");
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(responseJson => {
        responseJson.forEach((item, index) => {
            let ctTableRow = document.createElement("tr");
            tableEl.appendChild(ctTableRow);
            responseJson[index].completed == true ? ctTableRow.classList.add("true") : ctTableRow.classList.add("false")
            let ctTableDataUserId = document.createElement("td");
            let ctTableDataId = document.createElement("td");
            let ctTableDataTitle = document.createElement("td");
            let ctTableDataCompleted = document.createElement("td");
            ctTableDataUserId.innerHTML = responseJson[index].userId;
            ctTableRow.appendChild(ctTableDataUserId);
            ctTableDataId.innerHTML = responseJson[index].id;
            ctTableRow.appendChild(ctTableDataId);
            ctTableDataTitle.innerHTML = responseJson[index].title;
            ctTableRow.appendChild(ctTableDataTitle);
            ctTableDataCompleted.innerHTML = responseJson[index].completed;
            ctTableRow.appendChild(ctTableDataCompleted);
        });
    })

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(responseJson => {
        responseJson.forEach((item) => {
            console.log(item);
        })
        //console.log(responseJson);
    })
    .catch(err => console.log(err))


for (let i = 0; i < 3; i++) {
    setTimeout(function () { console.log(i); }, 1000 + i);
}

(function () {
    var a = b = 5;
})();
console.log(b);