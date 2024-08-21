// call back 
function greeting(){
    console.log("HELLO");
}

function processsinput(callback){
    var name ="chaetan";
    callback();
}
processsinput(greeting);

// call back function,map, filter 
// document.addEventListener("click",function(){
//     console.log("button clicked");
// })

// ARROW FUNCTION
// braces have to return something
const add=(first,second)=>{
    return first+second;
};
console.log(add(2,3));
// arrow function dif and normal function

// IMplicit return 
const sw=(num)=>num*num;
sw(5);

// arguments key word in normal fun
function ff(){
    console.log(arguments);
}
ff(1,2,3,4,4);
// in arrow functino we can't access

// arrow funton look for global declareation
let user={
    username: 'user',
    rc1:()=>{
        console.log(this.username);//undefine in arrow function
    },
    rc2(){
        console.log(this.username);
        // user
    }
};
user.rc1();
user.rc2();

