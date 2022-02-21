const numbers = [4,6,8,10];
const name = ["rayhan","mujumdar"]
const output2 = [];

const doubleft = (number)=> number * 2;
for(const number of numbers){
    const result = doubleft(number);
    output2.push(result);
    
}
// console.log(output2);
// 1.loop through each element;
// 2.element diye function ke call korsi;
// 3.result ekta array er modde push korchi;
// map array use
const output = numbers.map(function(x){
    return x * x; 
});//note: all element loop through and calculation to return a array;work only array elements;
const nameOutput = name.map(x => x);

const word = ["amar sonar bangla ami tomay valobashi","ami tore onek valobashi"];
//make a function
const allElements = (word) => {
    const singleCharctar = word[0].split(" ");
    return singleCharctar;
}
console.log(allElements(word))
//make a map;
const wordArray = word.map(word => {
    const singleCharctar = word.split(" ")
    return singleCharctar;
});
console.log(wordArray)
// console.log(singleCharctar)
// console.log(nameOutput);
// console.log(output);