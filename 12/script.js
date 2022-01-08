function test()
    
    {
        var nad = document.lec.data.value;
        nad = nad.replace(/[-/]/g, ".");
        
        //var data2 = new Date(lec.data2.value);
        nad10=nad.split('.');
        if (nad10[0]>29&& nad10[1]=="02") {alert("Февраль!"); return};
        
        zamena2=nad10[0];
        nad10[0]=nad10[1];
        nad10[1]=zamena2;
        var gotov2=nad10.join('-');
        var date1 = new Date(gotov2);
        var stroka = lec.data2.value;
        var arr = stroka.split('-');
        
        arr.reverse();
        
        zamena=arr[0];
        arr[0]=arr[1];
        arr[1]=zamena;
        
        var gotov = arr.join('-');
        
        var nad2 = gotov;
        nad2 = nad2.replace(/[/-]/g, ".");
        var date2 = new Date(nad2);
        
        //var date1 = new Date('01.02.2018');
        //var date2 = new Date('02.04.2018');
        //test1=lec.data4.value+"."+lec.data3.value+"."+lec.data5.value;
        //var date1 = new Date (test1);
        //var date2 = new Date('04.09.2018');
        
        var days= (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24) ; //ДЕНЬ
        
        if (days<0) {alert("Начальная дата должна быть меньше конечной!"); return}
        
        if ((date2.getDay()-1)==date1.getDay()) {var weeks= Math.floor(days/7);} else {var weeks= Math.floor(days/7)-1;}
        
        var weeks= Math.floor(days/7);
        
        var workdays= weeks*5;
        
        var dayoff= weeks*2;
        
        var years = (date2.getYear()-date1.getYear());

        var mes = ((date2.getMonth()+years*12)  - date1.getMonth() ); //дописать +год
        
        var dayy = date2.getDay();
        
        var x=(days % 7);
        for (i=x; i>0; i-- )
            {
                if (dayy == 0 || dayy == 1)
                    { dayoff++; } else { workdays++; };
                dayy--;
                if (dayy==0) {dayy==6};
            }
        if ((date2.getDay()-1)==date1.getDay()) {var weeks= Math.floor(days/7);} else {var weeks= Math.floor(days/7)-1;}
        
        for (i=0; i<lec.pole1.length; i++)
            { 
                if (lec.pole1[i].checked)
                    {
                        var a=i; 
                        switch(a)
                        {
                        case 0:
                            lec.vyv.value=days;
                            break;
                        case 1:
                            lec.vyv.value=dayoff;
                            break;
                        case 2:
                            lec.vyv.value=workdays;
                            break;
                        case 3:
                            lec.vyv.value=weeks;
                            break;
                        case 4:
                            lec.vyv.value=mes;
                            break;
                        }
                    }
            }
    }