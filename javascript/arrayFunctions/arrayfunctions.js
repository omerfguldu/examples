// DIZIYE ELEMAN EKLEME 
let array1 = [2,6,1,8,3];
console.log(array1) // array1 konsolda yazdır
array1.push(4); // array1'in sonuna 4 ekle
console.log(array1) // 4 eklenmiş haliyle array1'i yazdır
array1.unshift(1); // array1'in en başına 1 ekle
console.log(array1); // yeni array1'i yazdır.
// [1, 2, 6, 1, 8, 3, 4] --- dizinin son hali
array1.splice(2,2,'10'); // array1'in 2.indisine 10 değerini ekle ve eklenilen değerden sonra gelen 2 değeri diziden çıkar
// 1.parametre --> 3.parametrede girilen değerin dizinin kaçıncı indisine yazılacağını belirtir.
// 2.parametre --> eklenilen değerden sonra kaç eleman silineceğinin belirtir.
// bu örnekte dizinin 2.indisine 10 eklenir ve 2.indisinden sonra gelen 3 ve 4. indislerdeki değerler silinir.
// bu durumda oluşan yeni dizi --> [1, 2, 10, 8, 3, 4]
console.log(array1);

// DIZIDEN ELEMAN SILME
let array2 = ["kivi","muz","ananas","mango","hindistan cevizi"];
console.log(array2) // array2 yazdır
array2.pop() // array2'nin son elemanını sil
console.log(array2) // array2 son halini yazdır
array2.shift() // array2'nin ilk elemanını sil
console.log(array2) // array2'nin son halini yazdır
array2.splice(0,0) // splice(0, 0) girildiğinde dizide herhangi bir değişiklik olmaz
console.log(array2)
array2.splice(0, 1) // splice(0, 1) girildiğinde ise 0.indisten başlayarak 1 eleman siler
// bu durumda oluşan yeni dizi --> ["ananas","mango"]
console.log(array2)

// includes dizide sorgulanan değerin geçip geçmediğini sorgular. Varsa true yoksa false döner
console.log(`array2 : ${array2} || muz var mı? --> ${array2.includes("muz")}`)
console.log(`array2 : ${array2} || ananas var mı? --> ${array2.includes("ananas")}`)

// slice ile diziden belirtilen değerler arasındaki elemanları kopyalayarak yeni bir değişkene atayabiliriz
let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArray3 = array3.slice(3, array3.length);
// slice 1. parametresinde kopyalama işlemini yapacağımız dizide kopyalamanın kaçıncı indisten itibaren başlayacağını belirtiriz
// 2. parametrede ise kaçıncı indisine kadar olan değerler kopyalanacak bunu belirtiriz. 2.parametrede girilen indis değerine denk gelen diz elemanı kopyalamaya dahil edilmez.
// yukarıdaki komut ile array3[3] değerinden itibaren kopyalama başlar ve array3'ün lengthine denk gelen değere kadar kopyalayıp yeni diziye aktarır. Bu durumda length = 9 dur. Normalde array3[9]'a karşılık gelen bir değer olmamasına rağmen 2.parametrede belirtilen değer kopyalamaya dahil edilmediğinden kopyalama işlemi array3[8]'e kadar yapılır. 
console.log(array3)
console.log(newArray3)

// JOIN 
let array4 = ["masa","sandalye","televizyon","koltuk","telefon","sehpa"]
console.log(array4)
let newArray4 = array4.join(" - ");
console.log(newArray4)
console.log(typeof(newArray4))
console.log(typeof(array4))
// join ile yeni oluşturduğumuz değişkene string dizi elemanları arasına join içerisinde yer alan stringi yerleştirerek string ifade olarak değişkene aktarır. Aktarılan değişkene dizi olarak değil string olarak aktarılır.


// CONCAT
let array5 = [1,2,3,4,5]
let array6 = [6,7,8,9,10]
console.log("array5 --> ", array5)
console.log("array6 --> ", array6)
console.log("array5 ile array6 birleşimi --> ", array5.concat(array6)) // array5 e array6 yı ekle
console.log("array6 ile array5 birleşimi --> ", array6.concat(array5)) // array6 ya array5 i ekle
// iki diziyi birbiri ile birleştirmeyi sağlayan join ile oluşan diziyi yeni bir değişkene atamamız gerekir. Diziler ilk halerinde kalırlar. 