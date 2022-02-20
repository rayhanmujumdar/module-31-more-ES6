//  Destructuring Object to extract values to variables;
const fish = 
{id: {
    Class: 10,
    collage: "podma school",
    village: "chandpur"
    },
  name: "king Hilsha",
  price: 9000,
  phone: "017175555555",
  address: "chandpur",
  dress: 'silver'
};
// console.log(fish);
// const {collage,village,Class} = fish.id;
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
        onePic: "15 taka",
        onePack: "300 taka",
        color: "black and golden"
    }
}
const {name,village} = company.ceo;
console.log(name,village);
// console.log(collage,village,Class);
// const phone = fish.phone;
// console.log(phone);
// extra old typing length defind;