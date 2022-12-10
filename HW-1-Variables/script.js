const apple = 15.678;
const coconut = 123.965;
const orange = 90.2345;

const maxPrice = Math.max(apple,coconut,orange);
const minPrice = Math.min(apple,coconut,orange);
const sumPrice = apple + coconut + orange;

document.getElementById("maxPrice").innerHTML = maxPrice;
document.getElementById("minPrice").innerHTML = minPrice;
document.getElementById("sumPrice").innerHTML = sumPrice;

const appleRounded = Math.floor(apple);
const coconutRounded = Math.floor(coconut);
const orangeRounded = Math.floor(orange);
const sumPriceRounded = appleRounded + coconutRounded + orangeRounded;

document.getElementById("sumPriceRounded").innerHTML = sumPriceRounded;

const roundedHundreds = Math.round(sumPriceRounded/100)*100;

document.getElementById("roundedHundreds").innerHTML = roundedHundreds;

const boolean = sumPriceRounded % 2 == 0;
document.getElementById("boolean").innerHTML = boolean;

const change = 500 - sumPrice;
document.getElementById("change").innerHTML = change;

const averagePrice = sumPrice / 3;
document.getElementById("averagePrice").innerHTML = Number(averagePrice.toFixed(2));

const discount = Math.floor(Math.random()*100);
document.getElementById("discount").innerHTML = discount;

const price = Number(sumPrice - (sumPrice/100 * discount));
document.getElementById("price").innerHTML = Number(price.toFixed(2));

const income = price - (sumPrice / 2);
document.getElementById("income").innerHTML = income;