var cost = [451000, 1200, 4500, 12000, 16000];
    
function pic()
{
    if(lec.pole1.checked)
        {
            x0=cost[0];
            lec.comment.value=(x0);
            lec.pole2.disabled=false;
            lec.pole3.disabled=false;
            lec.pole4.disabled=false;
            lec.pole5.disabled=false;
            lec.but.disabled=false;
        }
    else
        {
            lec.pole2.disabled=true; lec.pole2.checked=false;
            lec.pole3.disabled=true; lec.pole3.checked=false; lec.pole4.disabled=true; lec.pole4.checked=false; lec.pole5.disabled=true; lec.pole5.checked=false;
            document.getElementById("com").value = "";
            lec.but.disabled=true;
            lec.itog.hidden=true;
        }
    
    if(lec.pole2.checked)
        {
            img2.style.display='block';
            x1=cost[1];
            lec.comment.value=(x1)
        }
    else
        {
        img2.style.display='none';
        x1=0;
        }
    
    if(lec.pole3.checked) 
        {
        img3.style.display='block';
        x2=cost[2];
        lec.comment.value=(x2)
        }
    else{img3.style.display='none'; x2=0;}
    
    if(lec.pole4.checked)
        {
        img4.style.display='block';
        x3=cost[3];
        lec.comment.value=(x3)
        }
    else{img4.style.display='none'; x3=0;}
    
    if(lec.pole5.checked)
        {
        img5.style.display='block';
        x4=cost[4];
        lec.comment.value=(x4)
        }
    else{img5.style.display='none'; x4=0;}
    

}

function f1()
{   
    MaxCost=(cost[0]+cost[1]+cost[2]+cost[3]+cost[4]);
    stoim=x0+x1+x2+x3+x4;
    
    if (stoim==MaxCost) {stoim=stoim*0.9+" Скидка 10%"};
    lec.itog.hidden=false;
    lec.itog.value=("Стоимость опций: \n\nБазовая Комлектация: "+x0+"\nКоврики: "+x1+ "\nЗащита картера: "+x2+ "\nЗимние шины: "+x3+ "\nЛитые диски: "+x4 +"\n\nОбщая стоимость: "+stoim);
    
}
