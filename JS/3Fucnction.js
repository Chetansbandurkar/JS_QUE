// function in js
//Q2 
function fun(num){
    return num*num;
}

console.log(fun(5));

// Q3 function expression
const sq=function(num){
    return num*num;
}

console.log(sq(5));

// Q4 what is first clas fuction
// function are treated pass as a arguments

function sqq(nums){
    return nums*nums;
}

function disp(fn){
    console.log("sq is "+fn(5));
}

console.log(disp(sqq));

//Q5 what is iffe;
// immendiately invoke function
// (function sqqq(num){
//     console.log(num*num);
// })();

(function sqqq(x){
    return (function ss(y){
        console.log(y);
    })(2)
})(1);

// Q7. function scope
            // for(let i=0;i<5;i++){
            //     setTimeout(function(){
            //         console.log(i);
            //     },i*1000)
            // }
// it will form the block scope
// if there is var i then only 5 printed

// Q7 function hoisting
// in function hoisting complete functino is copied to scope

functionName();
function functionName(){
    console.log("Hello");
}

// Q8 fucntion o/p base
var x=20;
var fun= function (){
    // work in local scope hoisting x=undefine;
    console.log(x);
    var x=240;
};
fun();

// Params and arguments
function funcs(num,num1){// num is called params/parametss
    // cane be get as ...a and CALLED REST OPERATOR
    console.log(num,num1);
}
var a=[5,6];// spread operator
funcs(...a);// 9 is called arguments  // here is spread operator


// Q9  rest operator must always be last
const fn=(a,x,y,...z)=>{
    console.log(a,x,y,z);
}
fn(2,3,4,1,2,2,17);