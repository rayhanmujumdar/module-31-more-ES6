const friends = ["tom hanks",'tom cruise','tom brady','tom solaiman'];
const friendLength = friends.map(name => {
    const myFriendLangth = name.length;
    return myFriendLangth;
})
// console.log(friendLength);

// map use to Object;
const products = [
    {name: "speaker", price: 1800 , color: 'black'},
    {name: "Mobile", price: 14000 , color: 'Blue'},
    {name: "monitor", price: 16000 , color: 'pure black'},
    {name: "food", price: 1100 , color: 'black'},
    {name: "ups", price: 2000 , color: 'red'},
];
// loop use to product name collect in array;
// const collection = [];
// for(const product of products){
//     collection.push(product.name);
// }
// console.log(collection);

// simple map using to product name collect in array;
const collection = products.map(product => product.name);
const collection2 = products.map(product => product.price);
products.map(product => console.log(product.name));
products.forEach(products => console.log(products.color));
// console.log(returns)
let myOpenion;
for(const color of collection){
    if(color == "black"){
        myOpenion = "this my favourite color"
    }
    else{
        myOpenion = "this not my favourite"
    }
}
const allCollection = collection.concat(collection2);
// console.log(allCollection);