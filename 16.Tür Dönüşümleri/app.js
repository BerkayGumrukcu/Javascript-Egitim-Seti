/*

------------TÜR DÖNÜŞÜMLERİ ------------

strings, numbers, booleans, undefined and null
object , function


*/

//! TOPLAMAZ, BİRLEŞTİRİR.
let a = 5;
let b = "10";
console.log(a+b);

//TODO STRİNGDEN NUMBER TİPİNE DÖNÜŞÜM
let x =10;
let y = Number("10");
let z = Number(b);
console.log(typeof z);
console.log(x+y+z);

//Diğer bir yol ParseInt ve ParseFloat kullanımı
let sayi = 8;
let sayi2 = parseInt("12");
let sayi3 = parseFloat("12.4");
console.log(sayi+sayi2+sayi3);

//TODO NUMBERDAN STRİNG TİPİNE DÖNÜŞÜM
let yazi = String(55);
console.log(typeof yazi);
console.log(yazi);

//! Diğer Bir Yol
let yazi2 = (61).toString();
console.log(typeof yazi2);
console.log(yazi2);

//TODO BOOLEAN'I STRİNG TİPİNE DÖNÜŞÜMÜ
let sonuc = String(true);
console.log(typeof sonuc);
console.log(sonuc);
