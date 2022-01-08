function compare(a, b) 
{
return a - b;
}

function comparerev(a, b) 
{
return b - a;
}

function cislo()
{
    if (event.keyCode < 48 || event.keyCode > 57)
    event.returnValue= false;
}

function randomInteger(min, max)
{
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}
function pole()
{
    if (rest.text9.value!=''){rest.but.disabled=false;} else {
        rest.but.disabled=true;
    }
}


function zapol()
{
    var sum=0;
    var otr=0;
    var pol=0;
    rest.text0.value='';
    for (i=0; i<rest.text9.value; i++)
        {
            x1=randomInteger(-100, 100);
            rest.text0.value+=x1+" ";
        }
    var stroka=rest.text0.value;
    var massiv=stroka.split(' ');
    popped = massiv.pop();
    
    for(i=0; i< massiv.length; i++)
        {
            massiv[i]=Number(massiv[i]);
        }

    min1=massiv[0];
    max1=massiv[0];
    
    if (rest.checkmax.checked)
        {
            for(i=0; i< massiv.length; i++)
            {
            max1=Math.max(massiv[i], max1); 
            }
            rest.maxt.value=max1;
        } else {rest.maxt.value='';}
    
    
    if (rest.checkmin.checked)
        {
            for(i=0; i< massiv.length; i++)
            {
            min1=Math.min(massiv[i], min1); 
            };
            rest.mint.value=min1;   
        } else {rest.mint.value='';}
    
    if (rest.sumsum.checked)
        {
            for(i=0; i< massiv.length; i++)
            { 
                { sum=sum+massiv[i] };
            rest.summa.value=sum; }
        } else {rest.summa.value='';}
    
    if (rest.otric.checked)
        {
            for(i=0; i< massiv.length; i++)
            { 
                if (massiv[i]<0)
                { otr=otr+1 };
            rest.otrotr.value=otr; }
        } else {rest.otrotr.value='';}
            
    if (rest.poloj.checked)
        {
            for(i=0; i< massiv.length; i++)
            { 
                if (massiv[i]>=0)
                { pol=pol+1 };
            rest.polpol.value=pol;
            } 
        }  else {rest.polpol.value='';}
    if (rest.pole1[0].checked)
        {
            massiv.sort(compare);
            rest.itog.value=massiv;
        }
    
    if (rest.pole1[1].checked)
        {
            massiv.sort(comparerev);
            rest.itog.value=massiv;
        }
    if (rest.pole1[2].checked)
        {
            rest.itog.value=massiv;
        }

}
