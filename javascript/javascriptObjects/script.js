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