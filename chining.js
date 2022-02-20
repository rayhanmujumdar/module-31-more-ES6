//declare variable based on the name of an object property;
const myObject = {x: 2, y: 50, z: 600, a: 25, b: 68}
const {x,y,a} = myObject;
console.log(x,y,a);
console.log("myObject.p",myObject?.x)
if(myObject?.x== undefined){
    console.log("not impormation`")
}
// array use to destructuring;
const number = [20,30,40,50];
const[first,second] = number;
console.log(first,second);


const [best,falto] = ["momtaj","porosh"];
console.log(falto);
const {sky,color} = {sky: "blue",soil: "matti", color: 'red',money: 500}
console.log(sky,color);

const company = {
    name: "american tobaco",
    brand: 'bencon',
    ceo: {
        name:"rayhan",
        no: '01776464695',
        village: 'american santal village',
        money: "126 billon"
    },
    price: {
        onePic: {
            quntity: 20,
            color: "white and golden",
            price: 15
        },
        onePack: "300 taka",
        color: "black and golden"
    }
}
const price = company.price.onePic.price
const price2 = company?.price?.twopic?.dam;
console.log(price2);

// practice;
const myhouse = {
    tv: "led color tv",
    modile: 4,
    member: 6,
    toylet: 2,
    badroom: 2,
    kithcenRoom: 1
}
const {member,toylet,badroom} = myhouse;
console.log('member',member,"bad room",badroom);
const nameArray = ["rayhan",'sabbir',"sakib","rayhan"];
console.log(...nameArray)
function name(first,second,third){
    const allName = `${first} ${second} ${third}`;
    return allName;
}
const newColletion = [...nameArray,'iqbal'];
console.log(newColletion)
console.log(name(...nameArray));