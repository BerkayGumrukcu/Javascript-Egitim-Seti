//!! Var - Let - Const

//? Değişken Nedir?

/*

C# * int degisken = deger;
int yas = 22;

JS * var/let/const degisken = deger;
let sayi = 10;

*/

//? Neye göre seçiyoruz?
//!! var = function scope özelliğine sahiptir. Çoğu yerden erişebildiği için bellekte çok yer kaplar.
//!! let/const = Block scope özelliğine sahiptir.

function selamVer(){
    var selam = "Herkese Merhaba"; // function scope
    if(true){
        var b=10;
        console.log(b);
    }
    console.log(b); // function scope özelliği en önemli özelliğidir var değişkeninin.
    console.log(selam);
}

selamVer();

//!! Bilinmesi gereken

// var a = 5;
// var a= 10;
// console.log(a);

// let a = 5;
// let a = 10;
// console.log(a);

//? LET VE CONST(constant "sabit") ARASINDAKİ FARK

// const a = 10;
// a = 15;
// console.log(a); 

//!! Değer sabittir daha sonradan değer değişmez.

const user = {
    username : "berkay",
    password : "123"
}
//!! user ={} Yapılamaz.
// user.username = "berkaygumrukcu";
console.log(user);