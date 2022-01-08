body1 = document.body;
    divv = document.getElementById('mal');
    function test1()
    {
        divv = document.getElementById('mal');
        divv.style.background = "url('fon_01.gif')";
    }
    function test2()
    {
        divv = document.getElementById('mal');
        divv.style.background = "url('fon_02.gif')";
    }
    function test3()
    {
        divv = document.getElementById('mal');
        divv.style.background = "url('fon_03.gif')";
    }
    function float_left()
    {
        left = document.getElementById('head');
        left.style.textAlign = 'left';
    }
    function float_center()
    {
        left = document.getElementById('head');
        left.style.textAlign = 'center';
    }
    function float_right()
    {
        left = document.getElementById('head');
        left.style.textAlign = 'right';
        //left.style.marginLeft = 'auto';
    }
    function green1()
    {
        green = document.getElementById('head');
        green.style.color = 'green';
    }
    function blue()
    {
        green = document.getElementById('head');
        green.style.color = 'blue';
    }
    function red()
    {
        green = document.getElementById('head');
        green.style.color = 'red';
    }
    function Taxoma()
    {
        font = document.getElementById('head');
        font.style.fontFamily = 'Taxoma';
    }
    function Impact()
    {
        font = document.getElementById('head');
        font.style.fontFamily = 'Impact';
    }
    function Georgia()
    {
        font = document.getElementById('head');
        font.style.fontFamily = 'Georgia';
    }
    function Courier()
    {
        font = document.getElementById('head');
        font.style.fontFamily = 'Courier';
    }
    function tt()
    {
        //ont = document.getElementById('main');
        //ont.style.display = 'none';
        ont = document.getElementById('chan');
        ont.style.visibility = 'visible';
    }
    function size1()
    {
        if (rest.select[1].selected)
        {
        siz = document.getElementById('mal');
        siz.style.fontSize = '14pt';
        }
        if (rest.select[0].selected)
        {
        siz = document.getElementById('mal');
        siz.style.fontSize = '12pt';
        }
        siz1 = document.getElementById('main');
        siz1.style.fontSize = '12pt';
        siz2 = document.getElementById('head');
        siz2.style.fontSize = '12pt';
    }
    function wid()
    {
        img1 = document.getElementById('pic');
        img1.style.width = rest.ww.value;
    }
    function float_left1()
    {
        left = document.getElementById('pic');
        left.style.float = 'left';
    }
    function float_right1()
    {
        left = document.getElementById('pic');
        left.style.float = 'right';
    }
    function vvod()
    {
        te = document.getElementById('float1');
        te.innerHTML=rest.na.value;
    }
    function hidd()
    {
        ont = document.getElementById('chan');
        ont.style.visibility = 'hidden';
    }
    function close1()
    {
        ont = document.getElementById('main');
        ont.style.display = 'none';
    }