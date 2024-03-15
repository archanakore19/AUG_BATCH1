let number= [45, 9, 58, 67, 65]; //67

//using simple loop
let num=[];
for(let i=0; i<number.length; i++){
    if(number[i]!=67){
        num.push(number[i])
    }
}
console.log(num);

// using forEach() arrayitrration Method >> break and continue keywords are not used in forEach loop.
let num2=[];
number.forEach(element => {
    if(element!=67){
        num2.push(element);
    }
    
});
console.log(num2);

const no = [12, 23, 66, 67, 67, 45, 55, 13];
let num3 = [];
for(let i=0; i<no.length; i++){
    if(no[i]==45){
        break;
    }
    num3.push(no[i]);
}
console.log(num3);

for(let i=0; i<=50; i++){
    if(i>=20 && i<=40){
        console.log(i);
    }
}
const array=[1,2,3,4,5,6,7,8,9,10];
array.forEach(element => {
    if(element>=5 && element<=9){
        console.log(element);
        document.write(element, '<br>');
    }
    
});
//let item=[1,2,3,4,5];
array.push(44);
document.write(array);


// const n = [1,2,3,4,5,6,7,8,9,10]
// n=[20,55]
// console.log(n);

//find() it will return fist match that passess your test condition
let item=[1,2,3,4,5,6,7,8,9,10];
let n2 = item.find(item => {
    return item > 7;
})
console.log(n2);  //9

//indexOf() : case sensitive //will return -1 if no match found
const fruits = ["Apple", "Orange", "Apple", "Mango","Orange"];
console.log(fruits.indexOf("Orange")); //1
console.log(fruits.indexOf("orange")); //-1

//lastIndexOf() case sensitive //will return -1 if no match found
console.log(fruits.lastIndexOf("Orange"));

let map = [
    { empName: "Archana",city:"Solapur"},
    { empName: "Pooja", city: "Nashik"},
    { empName: "Surekha", city:"Pune"}
]
let Name=map.map(empData =>{
    return empData.empName;
})
console.log(Name);

let data=[
    {name: "Poonam", city:"Pune", age:"23"},
    {name: "Pooja", city: "Nashik", age:"21"},
    {name: "Supriya", city:"Baramati", age:"34"}
]
let cities=data.map(cityData =>{
    return cityData.city;
})
console.log(cities);
let names=data.map(nameData =>{
    return nameData.name;
})
console.log(names);
let ages=data.map(ageData =>{
    return ageData.age;
})
console.log(ages);
let nameObj=data.map(({name,age})=>({name,age}))
console.log(nameObj);

let namess=data.map(name=>name)
console.log(namess);

let archu=data.map(({name}) =>({name}))
console.log(archu);

 let chars = [50,55,44,11,44,22,33,44,77];

//  Objects are used for storing keyed collections.
//  Arrays are used for storing ordered collections.

const arrays = [10, 20, 30,20, 40,20, 50,88,20];
const searchElement = 20;
let foundIndex=[];

arrays.forEach((element, index) => {
  if (element === searchElement) {
    foundIndex.push(index);
  }
});

console.log(foundIndex); // Output: 2

//include()  true or false
const array1 = [10, 20, 30,20, 40,20, 50,88,20];
console.log(array1.includes(15));

let char = ['a','b','a','a','d','f','b'];

//remove item using Set()
let char2 = [...new Set(char)];
console.log(char2);

//filter()
 let data1 = char.filter((item,i)=>{
   return char.indexOf(item) === i;
 })

  console.log(data1);
  
//using includes()
let uniqueEle = [];
char.forEach((ele,i)=>{
     if(!uniqueEle.includes(ele))
     {
          uniqueEle.push(ele)
     }
})
console.log(uniqueEle);

let H1=['a','c','d','c','c','e'];

let H2=[...new Set(H1)];
console.log(H2);

let H3=H1.filter((ele, i) =>{
    return H1.indexOf(ele) ===i;
})
console.log(H3);

let H4 = H1.filter((item, n)=>{
    return H1.indexOf(item)==n;
})
console.log(H4);

let H5=[];
H1.forEach((ele,i)=>{
    if(!H5.includes(ele))
    {
        H5.push(ele);

    }
})
console.log(H5);
