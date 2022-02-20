//1.let or const;
const MyName = "rayhan";
const nameLen = MyName.length
let phone = "iphone 15";
phone = "sumsung galaxy"
console.log(phone);
//2.defult parameter/use spread operator;
function maxNumber(array = []){
    const max = Math.max(...array);
    return max;
}
const numArray = [20,30,10,60];
const biggest = maxNumber();
console.log(biggest);
//3. tamlate string
const myNotes = `i am mojnu of ${MyName}. I don't hava a laili`
console.log(myNotes);

//4.arrow function;
const square = (x) => x * x;
console.log(square(9))