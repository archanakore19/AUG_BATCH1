let city= ['solapur', 'pune', 'nashik', 'nagpur', 'mumbai']; //hemmogeneous array
console.log(city.length);

// toString method
console.log(city.toString());

//pop() method //pops out >> delete last item for arrayand will return the same item
console.log(city);
let popOutItem= city.pop()
console.log(popOutItem);
console.log(city);

//push() method // to append /add items at the end of the array, will return added items
let pushMethod=city.push("Kolhapur")
console.log(pushMethod);
console.log(city); 

// shift() method remove the first array element and "shifts" all other elements to a lower index.
let color =['red', 'blue', 'black', 'yellow'];
console.log(color);
let shiftMethodRetuernedData=color.shift();
console.log(shiftMethodRetuernedData);
console.log(color);

//unshift() method 
let color2 = ['pink', 'red', 'blue', 'black', 'yellow'];
console.log(color2);
let returnedData = color2.unshift('orange', 'purple')
console.log(returnedData);
console.log(color2);

//join() method
let J = ['pink','red','blue','black','yellow'];
let J1= J.join(" ");
console.log(J1);

let name = ['Archana', 'Kore','pooja'];
console.log(name);
let j2= name.join("Prakash");
console.log(j2);

let DOB=['06', '06', '2000'];
console.log(DOB.join("/"));

//concat() method
c12=['pink','white'];
c13= ['red','orange'];
let concatMethod=c12.concat(c13);
console.log(concatMethod);

console.log(c13.concat(c12,c12, 'white', 'red'));

//delete
const fruit=['mango', 'greps', 'gava', 'banana'];
delete fruit[2];
console.log(fruit);
console.log(fruit.length);

//splice(index(where u want to add item), count(how many elements want to delete, elements to be added))
const fruit1 = ["Banana", "Orange", "Apple", "Mango"];
 //fruit1.splice(1,0,'kiwi');
 fruit1.splice(1,2,'kiwi');
console.log(fruit1);

const fruit2 = ["Banana", "Orange", "Apple", "Mango", "kiwi"];
let a = fruit2.slice(1, 4);
console.log(a);
console.log(fruit2);




