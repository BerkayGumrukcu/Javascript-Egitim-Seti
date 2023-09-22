//-----------KOŞUL YAPILARI----------
/* 
if(koşul){
    //!kodlar
}
else{
    //!kodlar
 }

 */

 let not =35;

 if(not>50){
    console.log("Geçtiniz.. Notunuz :" + not);
 }
 else{
    console.log("Geçemediniz.");
    alert("Kaldınız.");
 }


 let butce = Number(prompt("Bütçeniz :"));

 if(butce>3500){
    alert("Bütçeniz belirlenen tutarın üzerinde");
 }
 else{
    alert("Bütçeniz belirlenin tutarın altında.");
 }