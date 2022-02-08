let es5p1 = document.querySelector("#es5ornek1");
let es6p1 = document.querySelector("#es6ornek1");
let es5p2 = document.querySelector("#es5ornek2");
let es6p2 = document.querySelector("#es6ornek2");





// ES5
var toplam = function(x,y){
    return x+y;
}
es5p1.innerHTML += toplam(4,5);

// ES6
let toplames6 = (x,y) => x+y;
es6p1.innerHTML += toplames6(8,8);

// ES5
var sayi = function(x){
    return x*x;
}
es5p2.innerHTML += sayi(5);

// ES6
let sayies6 = x => x*x;
es6p2.innerHTML += sayies6(9);

// ES5
var feedTheCat = function(cat){
    if(cat === 'hungry'){
        return 'Feed the cat';
    }
    else{
        return 'Do not feed the cat';
    }
}
console.log(feedTheCat('hungry'));
// ES6
const feedTheCatES6 = (cat) =>{
    if(cat === 'hungry'){
        return 'Feed the cat';
    }
    else{
        return 'Do not feed cat';
    }
}
console.log(feedTheCatES6('full'));

const seriesList = list => {
    list.forEach((series,index) => {
        console.log(`${index+1}) ${series}`);
    });
}
seriesList(['See','Peaky Blinders','The Witcher','After Life']);


const multiplyArray = multiple => {
    let newArray=[];
    for(let i=0;i<multiple.length;i++){
        if(multiple[i] %2 ==0 ){
            newArray[i] = multiple[i]*2;
        }
        else{
            newArray[i] = multiple[i]*3;
        }
    }
    return newArray;
}
console.log(multiplyArray([3,2,3,4,6]));