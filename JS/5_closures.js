

function subscribe(){
    var name ="RoadsiderScoap";
    function disPlay(){
        console.log(name);
    }
    disPlay();
}

subscribe();

// lexical scope ->veriable define outside the fuction is accesible inside the function 

// CLOSURE SCOPE CHAIN
// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20

// Q1
let cnt=0;
(function printcnt(){
    if(cnt==0){
        let cnt=1;// shadonwing
        console.log(cnt);//1
    }
    console.log(cnt);//0
})();

// Q2 writ ethe function for the following
// ans->
function createBase(num){

    function add(nums){
        console.log( nums+num);
    }
    return add;
}
// q_>
var addsix=createBase(6);
addsix(10);//16 op;
addsix(21); //27 op



// Q3 TIme optimization
function find(){
    let a=[];
    for(let i=0;i<1000000;i++){
        a[i]=i*i;
    }
    // console.log(a[ind]);/// take more time
    return function (index){
      console.log(a[index]);
    }
}

// find(6);/
const cls=find();
cls(6);
console.time("6");
console.timeEnd("6");


// settime out only runs after full code run
function a(){
  for(var i=0;i<3;i++){
    setTimeout( function log(){
      console.log(i);
    },i*1000)
  }
}
// op will be 3,3,3
// because of var  with et 
a();