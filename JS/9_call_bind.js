var obj={name:"piyush"};

function sayHello(age){
    return "Hello "+this.name+" is "+age;
}
// call the function with given value and name
console.log(sayHello.call(obj,24));

// The call() method is used to invoke a function immediately. 
// It allows you to set the this value explicitly and
//  pass arguments to the function individually.


// APPLY same as call
// have to pass value in the form of array 

function ne(age , profesion){
    // console.log(ar);
    return "Hello "+this.name+" is "+age + " and is an "+profesion;
}
console.log(ne.apply(obj,[24,"software engineer"]));


// can provide the funcitno which we can called latter 
const bnd_fun=ne.bind(obj);
// we can use it agein and again 