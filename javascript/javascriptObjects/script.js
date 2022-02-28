let obj1 = { a: 'Omer', b: 'Cafer', c: 'Meto' }

Object.values(obj1).forEach(item => {
    console.log(item)
})

console.log(obj1);

let countriesTalkSpanish = {
    continent: 'South America',
    language: 'Spanish'
};

let uruguay = Object.create(countriesTalkSpanish);
uruguay.capital = 'Montevido'


console.log(uruguay)
console.log(obj1.a)

obj1.d = 'Faruk'
console.log(obj1.d);
obj1.d = 'Faruk Güldü'
console.log(obj1.d);
console.log(obj1);
delete obj1.d
console.log(obj1);
console.log(Object.entries(obj1));

Object.keys(obj1).forEach(item => {
    console.log(item);
    console.log(obj1[item]);
});

function objectKeyValues(objectName) {
    Object.entries(objectName).forEach(item => {
        console.log(item);
    })
}

objectKeyValues(obj1);
console.log(objectKeyValues["name"]);


const cikarma = ({ sayi1, sayi2 }) => {
    return console.log(sayi1 - sayi2);
}

const sayilar = {
    sayi2: 3,
    sayi1: 5,
}
cikarma(sayilar)


const toplama = ({ s1, s2, ...args }) => {
    toplam = 0
    toplam = s1 + s2;
    for (const key in args) {
        toplam += args[key]
    }
    console.log(toplam);
}

const toplanacakSayilar = {
    s1: 8,
    s2: 6,
    s3: 4,
    s4: 2,
    s5: 0,
    s6: 7,
    s7: 5,
    s8: 3,
    s9: 1
}

toplama(toplanacakSayilar);