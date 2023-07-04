let [msecond, second, minute, hours] = [0, 0, 0, 0];
let dis = document.getElementById('display');
let time = null;

function container() {
    msecond++;
    if (msecond == 60) {
        msecond = 0
        second++;
        if (second == 60) {
            second = 0;
            minute++;
            if (minute == 60) {
                minute = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;
    let ms = msecond < 10 ? "0" + msecond : msecond;
    // time.innerHTML=h+":"+m+":"+s;
    dis.innerHTML = h + ":" + m + ":" + s + ":" + ms;
}

function start() {

    if (time != null) {
        clearInterval(time);
        
        console.log("start bro")
    }
    // setInterval(container,1000)
    time = setInterval(container, 10)

}

function stop() {
    console.log("stop bro")
    // dis=clearInterval(time)
    clearInterval(time)

}
function reset() {
    console.log("reset bro")
    clearInterval(time);
    [msecond,second, minute, hours] = [0,0, 0, 0];
    dis.innerHTML = "00:00:00:00";
}
