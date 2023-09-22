//Breakpoint ve Tooltip Nedir?


//? TOOLTİP NEDİR?

toString // üstüne geldiğindeki açıklamalara Tooltip diyoruz.
//! Tooltipleri anlamak için okumak gerekir direkt kodu yazmadan açıklamalarını okumak önemlidir.

function ortalamaBul(vize1, vize2, finalNot) {
    //!kodlar
    return 75;
}

ortalamaBul();

//? BREAKPOİNT NEDİR?

//! Kodları milisaniyeler içerisinde çalışmasını değilde,
//! Adım adım çalışmasını istediğimiz hataları bulmamızda yardımcı olan bir yöntemdir.
//! Debugger olarakta adlandırılabilir.

debugger;
let a = 10;
let b = 15;
let c = a+b;
let d = a+b+c;
let e = a+c+b;

let sonuc = a+b+c+d+e;
console.log("Sonuç", sonuc);