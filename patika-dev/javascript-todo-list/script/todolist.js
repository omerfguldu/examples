let todoListArray = []
let spanOnClick = document.querySelector("#liveToastBtn");
let inputTask = document.querySelector("#task");
let liveToastError = document.querySelector("#liveToastError");
let liveToastSuccess = document.querySelector("#liveToastSuccess");
let closeSuccessBtn = document.querySelector(".closeSuccess");
let ulDOM = document.querySelector("#list")
let liDOM = document.querySelector(".list-item")
let closeErrorBtn = document.querySelector(".closeError");

// LOCALSTORAGEDA YER ALAN YAPILACAK İŞLEMLERİN YER ADLIĞI DİZİ ELEMANLARINI GETITEM İLE BİR DEĞİŞKENE ATADIK
// DAHA SONRA BU DİZİDE YER ALAN ELEMAN SAYISI KADAR DÖNGÜ DOLAŞARAK BU DEĞERLERİ LİSTEYE EKLEYEREK BAŞLANGIÇTA LOCALSTORAGE DA KAYITLI ELEMANLARI LİSTELETTİK

window.onload = function getLocalStorageData() {
    let localStorageData = JSON.parse(localStorage.getItem("Task"));
    for (let i = 0; i < localStorageData.length; i++) {
        todoListArray.push(localStorageData[i])
        let liItem = document.createElement("li");
        let closeButtonItem = document.createElement("button")
        liItem.innerHTML = localStorageData[i]
        liItem.classList.add("list-item")
        closeButtonItem.innerHTML = "x"
        closeButtonItem.classList.add("btn-remove")
        liItem.appendChild(closeButtonItem)
        ulDOM.appendChild(liItem);
    }
}
closeSuccessBtn.addEventListener("click", toastCloseSuccess)
closeErrorBtn.addEventListener("click", toastCloseError)
document.addEventListener("click", function (e) { // LI ELEMANLARI UZERINE TIKLANILDIGINDA CHECKED SINIFINI EKLEYEREK STIL DEGISKLIKLERI YAPMAK VE CHECKED SINIFI VARSA BU DEGISIKLIKLERI KALDIRMA FONKSIYONU
    e.target.classList.contains("checked") ? e.target.classList.remove("checked") : e.target.classList.add("checked")
})

// EKLE BUTONUNA BASILDIGINDA GERCEKLESECEK ISLEMLERIN YER ALDIGI FONKSIYON
function newElement() {
    let inputString = inputTask.value
    if (inputString.trim() == "" || isSameTask(inputString) == true) { // TRIM FONKSIYONU ILE GIRILEN DEGERIN SAGI VE SOLU KIRPILARAK BOS DEGER GIRILMEME KONTROLU VE GIRILEN DEGER DAHA ONCEDEN LISTEDE VAR MI YOK MU KONTROLU YAPILDI
        errorToast();
        inputTask.value = ""
    }
    else { // girilen inputta sorun yoksa ul ye li elemanı eklenme islemi 
        let liItem = document.createElement("li"); // liItem degiskenine li elementi olusturma komutu atandı
        let closeButtonItem = document.createElement("button") // li itemleri icerisinde yer alan butonlar icin buton olusturma komutu degiskene atandı
        liItem.innerHTML = inputTask.value // li elementinin innerHTML'sine input icerisindeki value aktarıldı
        liItem.classList.add("list-item") // style.css dosyasında yer alan list-item sınıfına ait ozellikler yeni elemente aktarıldı
        closeButtonItem.innerHTML = "x" // butonun icerisine "x" yazdırıldı
        closeButtonItem.classList.add("btn-remove") // btn-remove sınıfı yeni butona eklendi
        liItem.appendChild(closeButtonItem) // yeni li elementine yni buton appendChild ile eklendi
        ulDOM.appendChild(liItem); // ul icerisine icerisinde button bulunduran li elementi eklendi
        successToast();
        todoListArray.push(inputTask.value) // inputtaki deger aynı zamanda todoListArray isimli diziyede aktarıldı
        localStorage.setItem('Task', JSON.stringify(todoListArray)); // localStorage'da yer alan Task keyine sahip array guncellendi
        inputTask.value = "" // input valuesi temizlendi
    }
}
// toast mesajlarında yer alan kapatma dugmelerine basıldıgında toast mesajlarinin kapatilmasini saglayan fonksiyonlar
function toastCloseError() {
    liveToastError.classList.remove("show")
    liveToastError.classList.add("hide")
}
function toastCloseSuccess() {
    liveToastSuccess.classList.remove("show")
    liveToastSuccess.classList.add("hide")
}
// toast mesajlarında yer alan kapatma dugmelerine basıldıgında toast mesajlarinin kapatilmasini saglayan fonksiyonlar

// list itemlerine eklenen ve listeden elemanların cikarilmasini saglayan butonun listeden eleman silmesini saglayan fonksiyon
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-remove")) { // tiklanilan element btn-remove sınıfına sahipse if icerisine gir
        // innerText degiskenine li elementinin innerHTML'sini aktardık ancak mevcut durumda innerHTML de yalnızca girilen deger yer almıyor. Ayni zamanda button tanimlamasida yer aliyordu. -->" input.value <button class="btn-remove"> x </button> " seklinde gelen degerden benim istedigim yalnizca input valuesiydi.
        // Bunun icin bu stringi diziye cevirdim ve < isaretinin goruldugu yerin indexini alarak split fonksiyonu ile diziden geri kalan kismi sildim ve input degerini almayi basardim. " Bkz: innerTextArray.indexOf("<") " 
        let innerText = e.target.parentElement.innerHTML;
        let innerTextArray = innerText.split("");
        innerText = innerTextArray.join("").slice(0, innerTextArray.indexOf("<"));
        e.target.parentElement.remove(); // bu komut ile secilen buttonun parentElementi yani icerisinde bulundugu li elementini silmis oldum.
        // innerText degiskenine li icinde yer alan inputValueyi aktarmistim. todoListArray'in icerisinde filter fonksiyonu ile li icerisinde yer alan text harici kalan verileri yeni bir diziye aktardim
        // Boylece carpi butonuna basilan li icindeki deger diziden cikarilmis oldu.
        // Bu yeni diziyide localStoragedaki dizi ile guncelledim. Bu sayede localStoragedan da bu veri silinmis oldu.
        let newArray = todoListArray.filter(function (item) { return item !== `${innerText}` })
        todoListArray = newArray.slice(); // todoListArray'imi newArray deki degerler ile guncelledim.
        localStorage.setItem('Task', JSON.stringify(todoListArray)); // guncellenen todoListArray'i localStorage'da da guncellemek
    }
})

let errorToast = () => {
    // liveToastSuccess toast mesajı gorunur ise gizleme islemi
    liveToastSuccess.classList.remove("show")
    liveToastSuccess.classList.add("hide")
    // liveToastSuccess toast mesajı gorunur ise gizleme islemi

    // liveToastError toast mesajı gizli ise bu toastın ekran gosterilmesi islemi
    liveToastError.classList.remove("hide")
    liveToastError.classList.add("show")
    // liveToastError toast mesajı gizli ise bu toastın ekran gosterilmesi islemi
}

let successToast = () => {
    // hata mesajı gorunur ise gizleme islemi
    liveToastError.classList.remove("show")
    liveToastError.classList.add("hide")
    // hata mesajı gorunur ise gizleme islemi

    // islem basarılı toast mesajı gosterme
    liveToastSuccess.classList.remove("hide")
    liveToastSuccess.classList.add("show")
    // islem basarılı toast mesajı gosterme
}

// listeye eklencek eleman listede yer aliyor mu bilgisini kontrol ederek return eden fonksiyon
let isSameTask = (task) => {
    let isSame = todoListArray.includes(task)
    return isSame
}