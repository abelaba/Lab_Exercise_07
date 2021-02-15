


const secondhand = document.querySelector(".second-hand")
const minutehand = document.querySelector(".minute-hand")
const hourhand = document.querySelector(".hour-hand")


document.addEventListener('DOMContentLoaded',delay)






function delay(){
    setTimeout(()=>{
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        h = h % 12 || 12;

        
        secondhand.style.transform = `rotate(${(s-15)*6}deg)`;
        minutehand.style.transform = `rotate(${(m-15)*6}deg)`;
        hourhand.style.transform = `rotate(${(h-3)*30}deg)`;

        if(true){
            delay()
        }
    },1000)
}


