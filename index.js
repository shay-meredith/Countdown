//TODO: Try object oriented JS

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