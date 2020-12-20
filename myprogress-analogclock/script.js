const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
 //Changes clock based on current time
 var date = new Date();
    console.log(date);
   
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    
    // Contains degree of each arm
    let hrPosition = (hr*(360/12)) + (min*(360/60)/12);
    let minPosition = (min*(360/60)) + (sec*(360/60)/60);
    let secPosition = sec*(360/60);
 function runTheClock(){
   
    hrPosition = hrPosition + (3/360);
    minPosition = minPosition + (6/60);
    secPosition = secPosition + 6;
    
    console.log(hr,min, sec);
    //rotates the hand to the correct position according to the time
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock, 1000);

