//filter return to (if condition true) all in array;
//filer use a condition;
const numbers = [5,13,7,41,29,79,30,5,2,19];
const bigNumber = numbers.filter(number => number > 20);
const smallNumber = numbers.filter(number => number < 10);
// console.log(smallNumber);

const products = [
    {name: "speaker", price: 1800 , color: 'black'},
    {name: "Mobile", price: 14000 , color: 'blue'},
    {name: "monitor", price: 16000 , color: 'pure black'},
    {name: "food", price: 1100 , color: 'black'},
    {name: "ups", price: 2000 , color: 'red'},
];
const bigProduct = products.filter(product => product.price > 5000);
const blacks = products.filter(product => product.color == "black");
// console.log(blacks)
// console.log(bigProduct);


// find return to one elements;
// find sorasori ekta elements ke return dibe...not array;
const blues = products.find(product => product.color == "blue");
const bestPrice = products.find(product => product.price > 15000);
console.log(bestPrice)
const {name,price} = blues;
// console.log(price)