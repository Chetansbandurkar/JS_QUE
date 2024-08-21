// map ,filter and reduce 
// MAP
const nums=[1,2,3,4];
// cur no, ind, arryac can be taken
const multi =nums.map((num)=>{
    return num *3;
});
console.log(multi);

// FIlter 
// get the element with the given condn
 
const arr=[1,2,3,4,5];
const moreT=arr.filter((num)=>{
    return num>2;
})

console.log(moreT);


// what is reduce sum of previous values
const sum=nums.reduce((acc,cur,i,arr)=>{
    return acc + cur;
},0);

console.log(sum);


// Q1> for each vs map;array fun to lopp arr
// it can return the new array 
const mp=arr.map((ar)=>{
    return ar+2;
})

// it can modify the array
const forEachRes=arr.forEach((ar,i)=>{
arr[i]=ar+1;
})

console.log(mp,forEachRes,arr);


// Q 2
let std=[
    {name:"chetan",marks:90,rollno:12},
    {name:"bandurkar",marks:50,rollno:15},
    {name:"krishna",marks:90,rollno:16},
    {name:"raja",marks:70,rollno:10},
    {name:"kahna",marks:80,rollno:9},

]
// makes the name to upper case
const names=std.map((std)=>std.name.toUpperCase());
console.log(names);
// Q3 return only details of std with marks >60

const makrG=std.filter((std)=>{
    return std.marks>60;
})
console.log(makrG)
// marks >60 and roll >10

const rol=std.filter((std)=>std.rollno>10 && std.marks>60);
console.log(rol);

// Q4 sum of marks of stud
const sm=std.reduce((acc,curr)=>acc+curr.marks,0);
const su =std.reduce((ac,cur)=>{
    return ac+cur.marks;
},0)
console.log(sm);

// all function map.reduce ,filete allow chaining

const nam=std.filter((std)=>std.marks>60).map((std)=>std.name);
console.log(nam);