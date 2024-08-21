function test(){
    // let a="hello";
    var c='hii';
    if(true){
        let a='hi';
        let c='hello';
        // console.log(a);
        console.log(c);
    }
    console.log(c);
}

test();
// var->to let shadow can happen
// let to var not it will give error (iliggel shadowing)


// DECLARATION
let a; var b;
// const c;// in const const can't be declare without value intitilizatinon

var b=8; b=9;
let k=8;k=0;
const z=10;z=9;  // we cant redeclare the value of const 

// HOISTING 

