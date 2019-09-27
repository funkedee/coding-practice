function time(s){
    let splitTime = s.split(":")
    let hours = splitTime[0];
    let mins = splitTime[1];
    let secAm = splitTime[2];
    let sec = secAm.slice(0,2)
    if (secAm[secAm.length-2] === "P"){
        hours = parseFloat(hours)+12;
    };
    console.log(hours + ":" + mins + ":" + sec)
}

sampleTime = "12:05:45PM"

time(sampleTime);