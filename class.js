// (advanced) Class, constructor, method, create object from class
class ClassAdreess {
    name;
    role = 'starting new class';
    country = "BD";
    constructor (name,country){
        this.name = name;
        this.country = country;
    }
    conceptSeation(){
        console.log(this.name,"starting a class")
    }
}
const aamir = new ClassAdreess("amir khan",'india');
const rahat = new ClassAdreess("rahat ahmed","sudia arob")
const shakukh = new ClassAdreess("sharukh","kolkata")
rahat.conceptSeation();
// console.log(aamir);
// console.log(rahat)
console.log(shakukh);

// practice
class MyCarCollection {
    model;
    color;
    cc;
    gear;
    constructor(model,color,cc,gear){
        this.model = model;
        this.color = color;
        this.cc = cc;
        this.gear = gear;
    }
    bestCar(){
        return this.model,"this a good car";
    }
}
const model = "toyta";
const color = "red";
const cc = 1600;
const gear = 6;
const toyta = new MyCarCollection(model,color,cc,gear);
const bestCar = toyta.bestCar()
console.log(bestCar);