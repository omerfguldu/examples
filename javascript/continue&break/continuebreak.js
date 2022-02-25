//Etiketli break Örneği
//etiketli break ifadesi her ne kadar iç döngü içerisinde olsa dahi
//etiketin başına konulduğu döngü için etki eder.
//Böylece daha geniş çaplı bir dögüden çıkılmış oldu.
cikis_etiketi: for (var i = 0; i <= 5; i++) {
    for (var j = 0; j <= 50; j++) {
        if (j == 9) {
            break cikis_etiketi;
        }
        console.log("j :" + j);
    }
}
console.log("döngüden çıkıldı");


//Etiketli Continue Örneği

gec_etiketi: for (var i = 0; i <= 5; i++) {
    for (var j = 0; j <= 4; j++) {
        if (j == 2) {
            continue gec_etiketi;
        }
        console.log("j :" + j);
    }
}


const numbers = [4, 11, 9];
const newArray = [];

numbers.forEach(numbers => {
    newArray.push(numbers * 3);
});
console.log(newArray);

// output = [12, 33, 27]

let numbersArray = newArray.slice()
let newNumbersArray = []
numbersArray.forEach(numbers => {
    newNumbersArray.push(numbers + 2)
})
console.log(newNumbersArray);


const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
},
{
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
}
];

let over30 = person.filter(item => item.age > 30)
console.log(over30);

let isKnowJs = person.filter(item => item.languages.includes('JavaScript'))
console.log(isKnowJs);