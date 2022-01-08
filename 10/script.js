mno=0;
    
    var cost = [0, 400, 400, 500, 500, 600, 800];
    var lal = ["", "Анлг", "Французский", "Немецкий", "Китайский", "Итальянский", "Эльфийский" ];
    function select()
    {
        if( lec.s1[0].selected) 
        { 
            lec.pr1.disabled=true;
            lec.s2.disabled=true;
            lec.s2.value=lec.s2[0].value;
            lec.stoim.value='';
            lec.but.disabled=true;
            lec.comment.value='';
            lec.pr1.value='';
        }
        else { lec.s2.disabled=false; }
                
        
        
        
         
        for (i=1; i<7; i++)
        {
            if (lec.s2[i].selected) 
            {
                lec.stoim.value=cost[i];
                lec.but.disabled=false;
                lec.pr1.disabled=false;  
            }  
        }
    }
    
    function f1()
    {
        if (lec.pr1.value==0) {alert("Введите нужное количество часов!"); return}
        if (isNaN(lec.pr1.value)) {alert("Введите количество часов правильно!"); return}
        var temp = "";
        scena=(lec.stoim.value)*(lec.pr1.value);
        var scena2=0;
        for(var i = 1; i < lec.s1.length; i++) { 
            if(lec.s1[i].selected) {
                temp += lec.s1[i].value+" ";
                scena2 += scena;
            }
        }
        
        lec.comment.value=("Для изучения выбран: \n"+temp+" язык по "+lec.stoim.value+ " за час\n"+ "Стоимость: "+scena2);
    }