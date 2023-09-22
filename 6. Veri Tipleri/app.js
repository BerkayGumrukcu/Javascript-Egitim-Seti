/* 

? Veri Tipleri

1- String
2- Number
3- Boolean
4- Null
5- Undefined
6- Object
7- Function

*/

//--------------------STRİNG--------------
let isim = "Berkay"; // String Tipi ("kelime")
console.log(isim);
console.log(typeof isim); 

//--------------------NUMBER--------------
let sayi1= 10; // Number Tipi
console.log(sayi1);
console.log(typeof sayi1);

//--------------------BOOLEAN--------------
// boolean : True ve false'dan oluşur
console.log(5>8);
console.log(5>2);

//--------------------NULL--------------
let a = null; // Boş
a = 10;
console.log(a);

//--------------------UNDEFİNED--------------
let a;
console.log(typeof a);

//--------------------OBJECT--------------
let insan = {
    isim : "Berkay",
    soyisim : "Gümrükçü",
    yas : 23
}
console.log(insan);
console.log(typeof insan);

//--------------------FUNCTİON--------------

let func = function(){
    console.log("Merhaba");
}

func();
console.log(typeof func);