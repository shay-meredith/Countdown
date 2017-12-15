//TODO: Try object oriented JS

function addTime() {
    document.getElementsByTagName("h1")[0].style.display = "inline";
    document.getElementsByTagName("h1")[1].style.display = "inline";
    document.getElementById("time-insert").innerHTML = `${clock.hour}:${clock.minute}`;
}
d = new Date();
console.log(d);

let clock = {
    hour: d.getHours(),
    minute: d.getMinutes(),
    second: d.getSeconds(),
    month: d.getMonth(),
    day: d.getDay(),
    year: d.getFullYear()
}

console.log(clock.hour);