var vk;
document.body.onmouseover = getImg;
var timer = null;
var block1 = document.getElementById('bl1');
var block2 = document.getElementById('bl2');
var block3 = document.getElementById('bl3');
var block4 = document.getElementById('bl4');
var fon=["url('a1.jpg')", "url('a2.jpg')", "url('a3.jpg')", "url('a4.jpg')"];
var names = ["Jaguar", "MG MGB", "Aston Martin", "Lotus"];
var sos = 0;    

function getImg(e) {
    
    if(e.target.id == "bl1") {console.log(names[(sos-1)%4]); rest.aa1.value=names[(sos-1)%4];}
    else if(e.target.id == "bl2") {console.log(names[(sos)%4]); rest.aa1.value=names[(sos)%4];}
    else if(e.target.id == "bl3") {console.log(names[(sos+1)%4]); rest.aa1.value=names[(sos+1)%4];}
    else if(e.target.id == "bl4") {console.log(names[(sos+2)%4]); rest.aa1.value=names[(sos+2)%4];}
    else rest.aa1.value=' ';
    
}
function changeBgImg()
{
    block1.style.backgroundImage = fon[(0+sos)%4];
    block1.style.backgroundSize = "350px 190px";
    x1 = block1.style.backgroundImage;
    block2.style.backgroundImage = fon[(1+sos)%4];
    block2.style.backgroundSize = "350px 190px";
    block3.style.backgroundImage = fon[(2+sos)%4];
    block3.style.backgroundSize = "350px 190px";
    block4.style.backgroundImage = fon[(3+sos)%4];
    block4.style.backgroundSize = "350px 190px";
    sos++;
    
            
}

function bigImg(x) 
{
    names = ["ja", "df", "dagd", "dsd"];
}

function normalImg(x) 
{
   rest.aa1.value=" "; 
}