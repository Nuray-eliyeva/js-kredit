let emekHaqqi=3000;
let mebleq=25000;
let muddet=12;
let faiz;
let ayliqOdenish;
if(mebleq>emekHaqqi*10){
    console.log('size kredit dushmur')}
else{
if(muddet>36){
    console.log('bu serthtle size kredit dushmur');
}
else{
    if(ayliqOdenish>emekHaqqi*0.45){
        console.log('size kredit dushmur');
    }
    else{
    
    if(0<muddet && 12>muddet){
     faiz = 13;
        ayliqOdenish=(mebleq+(mebleq*faiz)/100)/muddet;
    }
    if(12<muddet && 24>muddet){
      faiz = 15;
        ayliqOdenish=(mebleq+(mebleq*faiz)/100)/muddet;
         }
    if(24<muddet && 36>muddet){
      faiz = 17;
        ayliqOdenish=(mebleq+(mebleq*faiz)/100)/muddet;
        } 
    
        console.log(mebleq + " azn mebleg size " + faiz + " faizle " + muddet + " ayliq " + ayliqOdenish + " odenisle verilir");
  }
}
} 

