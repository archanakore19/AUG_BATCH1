let text = "I live in Solapur, I like Solapur, I love Solapur";
let textLength = text.length;
console.log(textLength);

console.log(text.length);

let slicedText = text.slice(2,6); //start index:inclusive, end index: exclusive
console.log(slicedText);
console.log(text.slice(10,17));
console.log(text.slice(5));
console.log(text.slice(-10,-1));//start index:exclusive, end index:inclusive
console.log(text.slice(-10));

console.log(text.substring(-5, 10)); //negative vaiue is treated as 0 here, end index is exclusive

console.log(text.substr(2,6)); // start index, length both are inclusive


console.log(text.replace("Solapur", "Pune")); //method replaces only the first match

console.log(text.replace("jhkiugvty", "Pune")); //original string

console.log(text.replace("solapur", "Pune")); //original string: replace is case sensitive

console.log(text.replace(/solapur/i, "Pune"));

console.log(text.replace(/solapur/ig, "Pune")); //case insensitive and globally g means all same word

console.log(text.replaceAll("Solapur", "Mumbai")); //case sensitive

console.log(text.replaceAll(/solapur/ig, "Mumbai")); //

//console.log(text.replace( /uSer live In Mumbai , i like Mumbai/i, "poonam"));

//console.log(text.replace('I like','lllll'));

// function replaceFirstOccurrence(str, find, replace)

// { return str.replace(new RegExp(find), replace); }
//  var originalString = "This is a test. This is a test. This is a test."; 
//  var searchString = "This is a test.";
//  var replacementString = "That was a test."; 
//  var resultString = replaceFirstOccurrence(originalString, searchString, replacementString); 
// console.log(resultString);

console.log(text.toUpperCase());
console.log(text.toLowerCase());

//concat()

let firstName = 'poonam';
let lastName = 'patil';
let no =60600;
// let fullName = firstName + " " + lastName;
let fullName = firstName.concat(' ',no,' ', lastName , ' ',40000);

console.log(fullName);

console.log('lwr->',text.toLowerCase(), 'upr->',text.toUpperCase());

//The trim() method removes whitespace from both sides of a string:
let data = '         kjkjkj              ';
console.log(data.trim());

var string = "    This    should  become   something          else   too . ";
stringData = string.trim().replace(/\s+/g, " ");
console.log(stringData);

//toString()
let num = 65656565;
let data1 = num.toString();
console.log(data1);



let text1 = "HELLO WORLD";
let char = text1.charAt(0);
console.log(char);
let d = text1.charAt(20);
console.log(d); // it will return empty

//split()
let date = "04-april-1992";
let newDate = date.split('-')  //it splits out data and will return array.
console.log(newDate);
console.log(newDate[2]);

let num2= "65656565";
let m = parseInt(num2)
console.log(m);

let text4 = "sjds skdjs kshd skhshdi";
t5 = text4.split(" ");
console.log(t5);

add = "ankjnskan naa Archana nxknssn";
a = add.includes("Archana");  //include method returns true if value is include in data else will return false
console.log(a);
// {
//"status":"success", 
// "statusCode":"100256",
//  massage:"data submited successfully"
// }

let statusCode = "100256"
let B = statusCode.startsWith("100");
console.log(B);
console.log(statusCode.endsWith("256"));

let text5 = " Hello I am Archana Prakash Kore  I am Player";
console.log(text5.indexOf("am")); //first word in the string
console.log(text5.lastIndexOf("am"));//last word in the string
console.log(text5.indexOf("ammm")); //this word is not in the string that time indexof -1 same as lastIndexOf defined.

let text6 = "Mr. Blue has a blue house";
//let position = text6.search("blue");
let position = text6.search(/blue/i); //we can add regex patteren
console.log(position); //diff betw search and indexOf method : we cannot pass reg ex pattern to indexOf

// The search() cannot take a start position argument.
// The indexOf() method cannot search against a regular expression.
// The search() method returns the position of the first match.
// The match() method returns an array of matches

let text7 = "The rain in SPAIN stays mainly in the plain";

let g = text7.match("ain");
console.log(g);
console.log( text7.match(/ain/g))


