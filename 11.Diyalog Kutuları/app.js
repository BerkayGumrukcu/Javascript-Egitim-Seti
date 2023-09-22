/*

------------DİYALOG KUTULARI------------

- Alert
- Prompt
- Confirm

*/

// console.log(window)
//! window.alert
//! alert 

//function
//? alert("Nasılsın");
prompt() // Kullanıcıdan değer alabilmemizi sağlar.
let isim = prompt("İsim Giriniz : ");
let yas = prompt("Yaşınızı Giriniz :")
console.log("İsminiz :" + isim);
console.log("Yaşınız :" + yas);

confirm("Silmek istediğinize emin misiniz?");
let sonuc = confirm("Silmek istediğinize emin misiniz?");
console.log(sonuc);