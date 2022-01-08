function f1()
{
    text1=document.lec.text1.value;
    if (text1 ==0 ) {alert("Введите имя преподавателя");return};
    if (isNaN(text1)) {} else {alert("Введите имя правильно"); return}
    a=0;
    
    for (var i = 0; i < lec.pole1.length; i++) 
        { if(lec.pole1[i].checked) {x1=i+2; a++}; }
    
    for (var i = 0; i < lec.pole2.length; i++) 
        { if(lec.pole2[i].checked) {x2=i+2; a++}; }
    
    for (var i = 0; i < lec.pole3.length; i++) 
        { if(lec.pole3[i].checked) {x3=i+2; a++} };
    
    for (var i = 0; i < lec.pole4.length; i++) 
        { if(lec.pole4[i].checked) {x4=i+2; a++} };
    
    if (a!=4) {alert("Заполните все поля оценок"); return}
    
    summa=x1+x2+x3+x4;
    x=Math.round(100*(summa)/4)/100;

    
    lec.comment.value=("Преподаватель: "+text1  +"\nПолученные оценки: "+x1+" "+x2+" "+x3+" "+x4+"\nОбщее количество баллов: "+summa+"\nКачество преподавания: "+x );

}