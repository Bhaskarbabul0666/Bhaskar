function clk()
{
  var date=new Date()
   var hh=date.getHours()
   var mm=date.getMinutes()
   var ss=date.getSeconds()
   var dd=date.getDate()
   var mo=date.getMonth()
   var yy=date.getFullYear()
   var dy=date.getDay()
   var am_pm="AM"
  
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>=13)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    var fulltime=`${hh}:${mm} ${am_pm}`
    document.getElementById("Time").innerHTML=fulltime
    document.getElementById("sec").innerHTML=ss
    if(mo==0)
    {
        mo="jan"
    }
    else if(mo==1)
    {
        mo="Feb"
    }
    else if(mo==2)
    {
        mo="Mar"
    }
    else if(mo==3)
    {
        mo="Apr"
    }
    else if(mo==4)
    {
        mo="May"
    }
    else if(mo==5)
    {
        mo="jun"
    }
    else if(mo==6)
    {
        mo="jul"
    }
    else if(mo==7)
    {
        mo="Aug"
    }
    else if(mo==8)
    {
        mo="sep"
    }
    else if(mo==9)
    {
        mo="oct"
    }
    else if(mo==10)
    {
        mo="Nov"
    }
    else if(mo==11)
    {
        mo="Dec"
    }
    var fullDate=`${dd}/${mo}/${yy}`
    document.getElementById("date").innerHTML=fullDate
    var bdy=document.querySelector("body")

    switch(dy)
    {
        case 0:dy="sunday"
        bdy.style.backgroundImage="url(sun.jpg)"
        break;
        case 1:dy="Monday"
        bdy.style.backgroundImage="url(mon.jpg)"
        break;
        case 2:dy="Tuseday"
        bdy.style.backgroundImage="url(tuse.jpg)"
        break;
        case 3:dy="Wednseday"
        bdy.style.backgroundImage="url(wed.jpg)"
        break;
        case 4:dy="Thusday"
        bdy.style.backgroundImage="url(thus.jpg)"
        break;
        case 5:dy="Firday"
        bdy.style.backgroundImage="url(fri.jpg)"
        break;
        case 6:dy="Saturday"
        bdy.style.backgroundImage="url(sat.jpg)"
        break;
    }
    document.getElementById("Day").innerHTML=dy
    setTimeout(clk,1000)
  }
    function greet()
    {
        var date=new Date()
        var time=date.getHours()
        if(time>=5&&time<=12)
        {
            document.getElementById("message").innerHTML="Good Morning"
            document.getElementById("vid").src="./gd morn.mp4"
            document.getElementById("container").style.backgroundColor="rgba(219, 245, 255, 0.619)"
            document.getElementById("Time").style.color="black"
            document.getElementById("date").style.color="darkblue"
            document.getElementById("Day").style.color="darkblue"
            document.getElementById("sec").style.color="white"


        }
        else if(time>=12 && time<=16)
        {
            document.getElementById("message").innerHTML="good Afternoon"
            document.getElementById("vid").src="afternon.mp4"
            

        }
        else if(time>=16 && time<=20)
        {
            document.getElementById("message").innerHTML="Good Evening"
            document.getElementById("vid").src="gdevn.mp4"
            document.getElementById("container").style.backgroundColor="rgba(0, 0, 0, 0.57)"
            document.getElementById("Time").style.color="white"
            document.getElementById("date").style.color="wheat"
            document.getElementById("Day").style.color="wheat"
            document.getElementById("sec").style.color="black"


        }
        else 
        {
            document.getElementById("message").innerHTML="good Night"
            document.getElementById("vid").src="gdnght.mp4"
            document.getElementById("container").style.backgroundColor="rgba(0, 0, 0, 0.57)"
            document.getElementById("Time").style.color="white"
            document.getElementById("date").style.color="wheat"
            document.getElementById("Day").style.color="wheat"
            document.getElementById("sec").style.color="black"

        }
    }
    greet()



  function  removeTheGreetWindow()
     {
        document.getElementById("greet").style.display="none"
     }
     setTimeout(removeTheGreetWindow,5000)

     function removeAlarm()
     {
        document.getElementById("alarm").style.display="none"
     }
     function loadAlarm()
     {
        document.getElementById("alarm").style.display="flex"
     }
    
     var audioFile=new Audio()
     audioFile.src=" kgfring.mp3"
     function setAlarm()
     {
        var selec=document.querySelectorAll("select")
        var userhh=selec[0].value
        var usermm=selec[1].value
        var useram_pm=selec[2].value
        console.log(userhh,usermm,useram_pm)
     }


     var date=new Date()
     var hh=date.getHours();
     var mm=date.getMinutes();
     var am_pm="AM"

     if(hh>=12)
     {
        am_pm="PM"
     }
     if(hh==0)
     {
        hh=12;
     }
     console.log(hh,mm,am_pm)


     if(userhh==hh &&usermm==mm&&useram_pm==am_pm)
     {
        audioFile.play();
     }
     else{
        audioFile.pause();
     }
     setTimeout(setAlarm,1000)
     document.getElementById("alarm").style.display="none"
 