const readLine = require ('readline-sync');

let answer = readLine.question("What day is it?");
console.log(answer);

let username = readLine.question("Enter username");
let password = readLine.question("Enter password");
if (password == "abc"){
    console.log('welcome')${username};
} else{
    console.log("invalid");
}

let currentPrice = readLine.question("Enter current price:");
let originalprice = readLine.question("Enter original price")
let diff = originalprice - currentPrice;
let discount = (diff/originalprice).toFixed(2);
console.log('discount:'${discount} );

//Exponets
let base = readLine.question("Enter the base");
let exp = readLine.question("Enter the exponet");
let answer2 = base ** exp;
console.log(${base} 'to the power of ${exp} = ${answer2}');

//Rounding
console.log(5.7)
console.log(Math.round(5.7));
console.log(5.3);
console.log(Math.round(5.3));
console.log(-5.3);
console.log(Math.round(-5.3));
