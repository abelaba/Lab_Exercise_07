


const secondhand = document.querySelector(".second-hand")
const minutehand = document.querySelector(".minute-hand")
const hourhand = document.querySelector(".hour-hand")


document.addEventListener('DOMContentLoaded',delay)



var sec = 0;
var minute = 0;
var y = -90;
var i = 0;
var x = -90;
var z = -150;
function delay(){
    setTimeout(()=>{

        
        secondhand.style.transform = `rotate(${x}deg)`;
        console.log(x,sec);
        x+=6;
        sec +=1;
        if(sec==60){
            sec=0;
            y +=6
            minutehand.style.transform = `rotate(${y}deg)`;
            minute +=1
            if(minute==60){
                z+=30;
                hourhand.style.transform = `rotate(${z}deg)`;
                

            }
            

        }
        
        if(true){
            delay()
        }
    },1000)
}


