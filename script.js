const daysEl=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minsEl=document.getElementById('min');
const secondsEl=document.getElementById('sec'); 

const newYear=`1 Jan 2022`;

function countdown(){
    const newYearsDate=new Date(newYear);
    const currentDate=new Date();

    const totalSeconds=Math.floor((newYearsDate-currentDate)/1000)
    const days=Math.floor(totalSeconds/3600/24);
    const hours=Math.floor(totalSeconds/3600)%24;
    const minutes=Math.floor(totalSeconds/60)%60;
    const seconds=Math.floor(totalSeconds)%60;
    //console.log(days,hours,minutes,seconds);
    //console.log(newYearsDate-currentDate); returns in ms
    daysEl.innerHTML=days;
    hoursEl.innerHTML=hours;
    minsEl.innerHTML=minutes;
    secondsEl.innerHTML=formatTime(seconds);
    //console.log('running');
}

function formatTime(time){
    return time<10?`0${time}`:time;
}

setInterval(countdown,1000);    // call countdown function every 1000ms,i.e 1s 