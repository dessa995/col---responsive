//zadatak 1

let hours = 18;
let mins = 18;

let minsNow = hours * 60 + mins;
// console.log(minsNow);

let minsRemaining = 24 * 60 - minsNow;
// console.log(minsRemaining);

//zadatak 2 koristiti nove vrednosti u buduce

let hoursNow = Math.floor(minsNow/60);
let moduleMins = minsNow % 60;
let timeNow = hoursNow + ":" + moduleMins;
// console.log(timeNow);

// da pretvorimo u string

timeString = '' + minsNow;
console.log(timeString + 5864); 

// zadatak 3

let cenaRobe = 250;
let novcanica = 500;

let kusur = novcanica - cenaRobe;
// console.log(kusur);

// let zadatak4

let datum = new Date(); // datu je objekat koji sadrzi info i trenutnom datumu i vremenu
let currentHours = datum.getHours();
let currentMinutes = datum.getMinutes();
let currentSeconds = datum.getSeconds();

let minutesSinceMidnight = currentHours * 60 + currentMinutes;
let currentTime = currentHours + ":" + currentMinutes + ":" + currentSeconds;

// console.log(minutesSinceMidnight);
// console.log(currentTime);

// zadatak 5

console.log('02.12.2022');
console.log('2022/12/02');

// zadatak 6

let myEuros = 120;
let kurs = 116.8;

let myDinar = myEuros * kurs;
// console.log(myDinar);


