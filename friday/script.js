console.log('poruka iz js datoteke');

let y; // deklarisali smo romenljivu y
let x = 3; //deklarisali smo promenljivu x i dodelili joj vrednost 3

console.log(x);

x = 'pera'
console.log(x);

y = -10; //dodeljuje se pocetna vrednost promenljive y

console.log(y);

x = 8;

console.log(x - y);

let z = true;

console.log(z);

const pi = 3.141592;
console.log(pi);

const mrk = undefined;

let age;  // age = undefined

console.log(age); //undefined
console.log(age + 3); // NaN => not a number

let age2;
age2 = null;
console.log(age2); // null;
console.log(age2 + 3); // 3;

let ime = 'stefan';
console.log(ime);

let ime2 = "stefan"
console.log(ime2);

let ime3 = "sefan 'sroom";
console.log(ime3);

let ime4 = 'this was a "funny" joke';
console.log(ime4);

let ime5 = "this was a \"funny\" joke"; //ova crtica je koristna
console.log(ime5);

x = 5;
x += 3;
console.log(x);

// x = x / 2;
x /= 2;
console.log(x);

x = 6;
x++;
console.log(x);

++x;
console.log(x);

x = 6;
console.log(x++); // isisace 6,(prvo se iskoristi sata vrednost pa se tek oda uveca)
console.log(x);  // ispisace 7
console.log(++x); // ispisace 8 (prvo se uveca vrednost pa se tek onda se koristi)

//deljenje

console.log(7 / 3);
console.log(7 % 3); // daje samo ostatak
console.log(24 % 18);

console.log(54 % 13);
console.log((52 % 13) + 1);

x = 5;
console.log(x ** 3); // na kvadrat otp 5*5*5 tj na treci
