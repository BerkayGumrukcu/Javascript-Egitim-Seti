// Var - let - Const

/*

------- SCOPE(KAPSAM)----------

-> Global Scope = En genel, her yerden erişilebilen Scope kavramıdır.
-> Function Scope = Bir değişkene fonksiyon ile erişme.
-> Block Scope = 

*/

var degiskenIsmi = 10;
console.log(degiskenIsmi);

function method1(){
    var sayi = 10;
    console.log(sayi);
}
method1();

var c=20; // global scope
function blok1(){
    var b=10; // function scope
    if (true) {
        var a= 5; // block scope
    }
    while(true){

    }
    for (let i = 0; i < array.length; i++) {

    }
}