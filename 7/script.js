function check()
    {
    pole1=oboi.pole1.value;
    pole2=oboi.pole2.value;
    pole3=oboi.pole3.value;
    pole4=oboi.pole4.value;
    pole5=oboi.pole5.value;
    if (pole1 !='' && pole2 !='' && pole3 !='' && pole4 !='' && pole5 !='')     oboi.but.disabled=false;
        oboi.pole6.disabled=true;
    }
    
    
function vyvod()
    {
    x1=document.oboi.pole1.value;
    x2=document.oboi.pole2.value;
    x3=document.oboi.pole3.value;
    x4=document.oboi.pole4.value;
    x5=document.oboi.pole5.value;
    x6=document.oboi.pole6.value;
    
    
    if (isNaN(pole1) || isNaN(pole2) || isNaN(pole3)  || isNaN(pole4)  || isNaN(pole5)) { alert("Введите числа"); return}; 

    plo=Math.ceil(((x1*2+x2*2)*x3)/(x4*x5));

    if (x1 ==0) {alert("Введите длину комнаты"); return};
    if (x2 ==0) {alert("Введите ширину комнаты"); return};
    if (x3 ==0) {alert("Введите высоту комнаты"); return};
    if (x4 ==0) {alert("Введите ширину рулона"); return};
    if (x5 ==0) {alert("Введите длину рулона"); return}; 
    document.getElementById('id').value = plo;
}
