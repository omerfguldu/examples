// .counter-text classına sahiğ h1 etiketini counterText değişkenine atama işlemi
let counterText = document.querySelector(".counter-text");

// counterText'in içeriğinin local storage da yer alan countNumber keyinin valuesi ile değiştirilmesi (bu sayede açılışta localde en son kaydedilen sayıdan devam edilecek)
counterText.innerHTML = localStorage.getItem('countNumber');

// numberCounter değişkeni tanımlaması ve localdeki valuenin int e dönüştürülerek atanması
let numberCounter= parseInt(localStorage.getItem('countNumber'));

// button-increase id sine sahip butonun btnIncrease değişkenine atanması
let btnIncrease = document.querySelector("#button-increase");

// button-decrease id sine sahip butonun btnDecrease değişkenine atanması
let btnDecrease = document.querySelector("#button-decrease");

// btnIncrease ve btnDecrease değişkenlerine eventListener ile click eventi eklenmesi
btnIncrease.addEventListener('click',counterFunc)
btnDecrease.addEventListener('click', counterFunc)

// click eventine tanımlı counterFunc isimli fonksiyon
function counterFunc(){
    let btnId = this.id // btnId değikenine tıklanılan butonun id'sinin atanması
    btnId=="button-increase" ? numberCounter+=1 : numberCounter -=1 // buton id si 'button-increase' ise numberCounter'ı 1 artır değilse 1 azalt
    localStorage.setItem('countNumber',numberCounter) // numberCounter'ın yeni değerini localde yer alan countNumber'ın valuesi ile değiştir-güncelle
    counterText.innerHTML = localStorage.getItem('countNumber'); // counterText'in içeriğini localdeki güncellenen value ile değiştir. 
}