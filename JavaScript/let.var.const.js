//let/var/ const vn = valuue

//default var keyward

//scope level diff
//let,const: block level scope, var: function level scope
function test(){
    let a = 10;
    if(a < 20){
        let b = 20;
        var c = 60;
        const d = 30;
    }
    //console.log(b);
    console.log(c);
    //console.log(d);
}
console.log(test());

// Redeclaration is not possible with let, constkeyward
// Redeclaration is Possible with var keyward
//const city= 'pune';
//const city= 'Solapur';   ///not possible double same variable name
//let city= 'pune';
//let city= 'Solapur';     ///not possible double same variable name

var city = 'pune';
var city = 'mumbai';   //its possible double same variable name

// reaasigning value to the variable is possible with let, var keward 
//ressignig value to the variable is not possible with const keyward
let marks = 40;
marks = 80;  //possible

var mark = 50;
mark = 17;  //possible

const A = 50;
//A= 45;  //not possibleb

//hoisting : first  define value to the variable than declare it;
//not possible with const, let keyward
P=20;
var P;

//V=30;
//let V  //not possible

//H=70;
//const H; //not possible


//defining value at a time of declaration is must with const keyward
let S;
S=20;

var D;
D =40;

//const Q;
//Q=20;

const s = 50;

//function:parametrised,parameterless
//use : to implement logic
function multiplication(){
    //code block
    console.log('parameterless fun');
     let a = 20;
     let b = 30;
     res = a * b;
     console.log('res',res);
  }
  
  //argument/parameter
  function division(a,b){
     res = a / b;
    console.log('parametrised fun',res);
  }