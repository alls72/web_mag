function cislo()
	{
		if (event.keyCode < 48 || event.keyCode > 57)
		event.returnValue= false;
	}
    
    
    
    function check()
    {
        var name = doc.name.value;
        var check1 = name.search(/^[А-Я][а-я]*\s[А-Я][а-я]*\s[А-Я][а-я]*$/g);
        //if (check1 != -1) { } else {alert("Введите имя правильно, первая буква заглавная"); return;}
        
        //if (doc.town[0 && 1 && 2 && 3 && 4].checked) {} else {alert("Выберите город"); return}
        
        var adres = doc.adres.value;
        var check2= adres.search(/^г\.\s([А-Я][а-я]*)\,\sул\.\s([а-яА-Я0-9\-\s]*)\,\sкв\.\s([0-9]*)$/ig);
        //if (check2 != -1) {} else {alert("Введите адрес в формате г. XXXXX, ул. XXXXX, кв. XXX"); return;}
        
        var phone = doc.phone.value;
        //var check3= phone.search(/^((\([0-9]{3}\))[- ]?)((([0-9]{3})([- ]?)([0-9]{4}))|((([0-9]{2})([- ]?)){3}))$/g);
        var check3= phone.search(/^((8|\+7)[- ]?)((([0-9]{2}(\-)?){4}[0-9]{2})|(([0-9]{3}-?){2}[0-9]{4}))$/g);
        if (check3 != -1) {} else {alert("Введите номер в формате  8 555-555-5555 или +7 55-55-55-55-55"); return;}
        
        var email = doc.email.value;
        var check4= email.search(/^([A-Za-z0-9._]+)\@([a-z0-9]+)\.([a-z]+)$/ig);
        //if (check4 != -1) {} else {alert("Введите email в формате example01@gmail.com"); return;}
        
        var snils = doc.snils.value;
        var check5= snils.search(/^([0-9]{3}\-){2}[0-9]{3}\s[0-9]{2}$/g);
        //if (check5 != -1) {} else {alert("Введите СНИЛС в формате XXX-XXX-XXX YY"); return;}
        
        var stroka = doc.snils.value;
        stroka=stroka.replace(" ", "-");
        var mass=stroka.split("-");        
        
        for(i=0; i< mass.length; i++)
            {
                mass[i]=Number(mass[i]);
            }
        
        stroka=stroka.replace(/[-]/g, '');
        var mass2=stroka.split('');
            
        for(i=0; i< mass2.length; i++)
            { mass2[i]=Number(mass2[i]); }
            
        var sum = 0;
        for (var i = 0; i < 9; i++) {
                sum += mass2[i] * (9-i);  }
        
        if (sum!=mass[3] && sum<100) alert("Введите последнее число правильно");
        
        if (mass[0]<=1 || mass[1]<=1 || mass[2]<999) {}
        else
        {
            if (sum==100 || sum==101) {var contr="00"; alert("Контрольное число="+contr);}
            if (sum>101) {var contr=sum % 101; alert("Контрольное число="+contr);}
            
        }
        
        
    }
    
    if (doc.count.value=='') alert("Введите количество");
    
    function knopka()
    {
       //if (doc.name.value=='' || doc.adres.value=='' || doc.phone.value=='' || doc.email.value=='' || doc.snils.value=='' || doc.count.value=='') {doc.button.disabled=true;} else { doc.button.disabled=false;}
    }
    
    //var phone = doc.phone.value;
    //var check3= phone.search(/^(\([0-9]{3}\)[- ]?)((([0-9]{3})( -)?([0-9]{3}4))|(([0-9]{2}-?){4}))$/g);
    //(555) 55-55-55