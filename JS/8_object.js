// object binding in js
//  two types 1.explicit 2.implicit
// using (.)notation invoke an object call impliicit binding in
// 
//this ->to reference to someone
// depends on the context (global,local)
let user ={
    name:"john",
    age:30,
    // normal 
    getDetails(){
        console.log(this.name,this.age);
        // op john,30
        const nestedarrow=()=>console.log(this.name,this.age);// will op name age
        // taking values from the getDetails
        nestedarrow();
    },

    // arrow function
    getDetailsArrow:()=>{
        // arrow function always look for the window objects
        console.log(this.name,this.age)// undefine undefine
    }
}

user.getDetails();
user.getDetailsArrow();

// Que 
const usr ={
    firstName:"Piyush",
    lastName:"Kumar",
    getName(){
        const firstName="piyush agarwal";

        return this.firstName;
    }
}
console.log(usr.getName());