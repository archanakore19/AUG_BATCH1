//spread operator (...):
//The javascript spread operator(...) allows us to
// quickly copy all or part of an existing array or object
// into another array or object.

let num = [40,50,60,70,80,6];
let num2 = [];
//num.forEach(ele => {
  //  num2.push(ele);
//})
//console.log(num2);

num2 = [...num];
console.log(num2);

//partelement copy
let [item1, item2, ...item3]=num;
//item1-40, item2-50, item3-60,70,80,6
console.log(item1);
console.log(item2);
console.log(item3);


//concatation of array
let color1=["red", "black"];
let color2=["yellow", "green"];
let color = [...color1, ...color2];
console.log(color);


let emp1 = {
  name:"Archana",
  id: 123456,
  city:"Pune"
};
let emp2 = {
  name:"pooja",
  id:234567,
  city:"Solapur"

}

let emp={...emp1, ...emp2}
console.log(emp); //do not use sp for object 

//Object.assign(target, ...sources);
const mergedObj = Object.assign({},emp1, emp2);
console.log("mergedObj",mergedObj);

//ternory operator
let marks = 30;
if(marks > 35){
    console.log('pass');

}
else{
    console.log('fail');
}

//condition ? t>>statment1 : f>> statment2
marks > 35 ? console.log('pass') : console.log("fail");

//Arrow functions : allow us to write shorter function syntax:
 function test(){
   return 20*8;
}

console.log(test());

test1 = ()=> 20*8;
console.log(test1());
