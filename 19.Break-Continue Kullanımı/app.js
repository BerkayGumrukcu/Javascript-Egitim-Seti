//BREAK & CONTİNUE

//! 1 den 10 a kadar sayıları yazdıralım 8 e geldiğinde döngüden çıkalım.

let sayac = 1;


//TODO BREAK
while(sayac<=10){
    console.log(sayac);

    if(sayac==8){
        break;
    }

    sayac++;
}

//TODO CONTİNUE
//1 2 3 4 5 6 8 9 10

let i = 0;

while (i<=10) {
    i++;

    if(i>10){
        break;
    }
    if(i==8){
        continue;
    }
    
    console.log(i);
}