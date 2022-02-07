let a = prompt("Bir sayi giriniz");
let sonuc = document.querySelector("#resulttext");

function factorialCalc(n){
    let result=1;
    if(n>=0){
        for(let i=1; i<n; i++){
            result += result*i;   
        }
        return result;
    }
    else{
        result = "negatif sayıların faktöriyeli olmaz"
        return result;
    }
    
}

sonuc.innerHTML=`${a} faktoriyel = ${factorialCalc(a)}`
