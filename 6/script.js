function vyvod()
    {
    peremennaya1=document.anketa.pole1.value;
    peremennaya2=document.anketa.pole2.value;
    let index = 1;
    if (document.anketa.pole3[0].checked) { peremennaya3="Картинка 1"; }
    if (document.anketa.pole3[1].checked) { peremennaya3="Картинка 2"; index = 2; }
    if (document.anketa.pole3[2].checked) { peremennaya3="Картинка 3"; index = 3; }
    document.write('<body bgcolor=grey>');
    document.write('<H1>');
    document.write(peremennaya1+"-Ширина"+"<br>");
    document.write(peremennaya2+"-Высота"+"<br>");
    document.write(peremennaya3);
    document.write('</H1>');
      
        peremennaya4=parseInt(peremennaya1);
        peremennaya5=parseInt(peremennaya2);
        
        const res = `<img name="img" src="pr_${ index }.jpg">`;
        document.write(res)
        img.width=peremennaya4;
        img.height=peremennaya5;    
        

    }