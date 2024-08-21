const obj={
    height:30,
};
console.log(obj.height);
delete obj.height;
// object proto type is not created 
console.log(obj.height);


const obj2=Object.create(
    {
        height:30,
    }
)


console.log(obj2.height)
delete obj2.height;
// here it cant delete the obj prop
// as the prototype of Object is created
console.log(obj2.height)