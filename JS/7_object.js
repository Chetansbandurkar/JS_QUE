// Objects in js
const user={
    name:"John",
    age:18,
// property with spaces
"full name":"John Doe",
}
// console.log(user["full name"]);
// console.log(user.age);
// accesong throught loop;

for(key in user) {
    console.log(key);
    console.log(user[key]);
}

// Q1->
const obj={
    a:"one",
    b:"two",
    a:"three",
    // op wil lbe a=3,b=2;
};
console.log(obj);

// Q2> create function multiplyBy(obj) that multiply
// all numeric value
let nums={
    a:200,
    b:100,
    title:"my nums",
};
multipltByTwo(nums)
function multipltByTwo(obj){
    for(key in obj) {
        if(typeof obj[key]==="number"){
            obj[key] = obj[key]*2;
        }
    }
}

console.log(nums);

// Q4 what is json stringify and json parse 
const uss={
    name:'chetan',
    age:24,
};
const strObj = JSON.stringify(uss)
console.log(strObj);
// now we can't access the object directly as it is in string format
// so we use parse
// example to store in local storage if not the it will show object onject
console.log(JSON.parse(strObj));

// Q5 
const u={name:'chetan', age:24};
const admin={admin:"ratan",...u};

console.log(admin);

// destructuring 
const {name} = u;