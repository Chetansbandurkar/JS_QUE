// var fullName="chetan bandu";
// var obj={
//     fullName:"hacked fulle name",
//     // /properties
//     prop:
//     {
//         fullName:"Inside Prop",
//         getFullName: function(){
//             // hase acces of properties full name
//             return this.fullName;
//         },
//     },

//     // 
//     getFullName:function(){
//         return this.fullName;
//     },

//     getFullNamev2:()=> this.fullName,

//     getFullNamev3:(function(){
//         return this.fullName;
//     })(),
// };

// console.log(obj.prop.getFullName());
// console.log(obj.getFullName());
// console.log(obj.getFullNamev2());
// console.log(obj.getFullNamev3);

var globalVar = "Global scope";

const obj = {
  globalVar: "Object scope",
  normalFunc: function() {
    console.log(this.globalVar);
  },
  arrowFunc: () => {
    console.log(this.globalVar);
  }
};

obj.normalFunc(); // Output: "Object scope" (because `this` refers to `obj`)
obj.arrowFunc();  // Output: "Global scope" (because `this` refers to global/window object)
