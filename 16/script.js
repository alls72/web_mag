function kol()
    
    
{
    if(lec.pole1[2].checked) {x1=1; lec.text1.value=x1;} else {x1=0; lec.text1.value=x1;}
}

function x2s() {x2=x21+x22+x23+x24}
function kold()
{
    x21=0;
    x22=0;
    x23=0;
    x24=0;
    
    if(lec.pole21.checked) {x21=2; x2s(); lec.text2.value=x2; } else {x21=0; x2s(); lec.text2.value=x2}
    
    if(lec.pole22.checked) {x22=-1; x2s(); lec.text2.value=x2;} else {x22=0; x2s(); lec.text2.value=x2}
    
    if(lec.pole23.checked) {x23=-1; x2s(); lec.text2.value=x2;} else {x23=0; x2s(); lec.text2.value=x2}
    
    if(lec.pole24.checked) {x24=+2; x2s(); lec.text2.value=x2;} else {x24=0; x2s(); lec.text2.value=x2}
}

function div3()
{
    vvod=lec.pole3.value;   
    if (vvod=="s" || vvod=="S") {x3=1; lec.text3.value=x3} else {x3=0; lec.text3.value=x3} 
}

function div4()
{
    if( lec.s1[0].selected) {x4=0; lec.text4.value=''}
    if( lec.s1[2].selected) {x4=1; lec.text4.value=x4}
    
    if (lec.s1[1].selected) {x4=0; lec.text4.value=0;}
    
    for (i=3; i<4; i++) 
        { if( lec.s1[i].selected) 
            {
                x4=0; lec.text4.value=0;       
            } 
        }  
}

function vyvod()
{
    if(lec.text1.value=='') {alert("Выполните первое задание");return};
    if(lec.text2.value=='') {alert("Выполните второе задание");return};
    if (isNaN(lec.pole3.value)) {} else {alert("Некорректные данные!  Введите значение латинской буквой!(номер 3)"); return}
    if(lec.text3.value=='') {alert("Выполните третье задание");return};
    if( lec.s1[0].selected) {alert("Выполните четвертое задание");return}
    
    sum=x1+x2+x3;
    
    
    if (lec.s1[1].selected) {sum=sum/2;}
    for (i=3; i<4; i++)
        { if( lec.s1[i].selected) 
            {sum=sum/2;}
        }
    
    summa=sum+x4;
    
    if (summa<0 ) {summa=0; ocenka="Неудовлетворительно";}
    if (summa>0 && summa<4) { ocenka="Неудовлетворительно";}
    if (summa>3 && summa<6) ocenka="Хорошо";
    if (summa>5 && summa<8) ocenka="Отлично";
    
    alert("Ваша оценка: "+ocenka+ "\nКоличество баллов: "+summa);
    
}