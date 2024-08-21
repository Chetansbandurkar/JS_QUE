var variables =20;

(()=>{
    console.log(variables);
    variables=30;
    console.log(variables);
})();// IIFE immediately Invoked functions

console.log(variables);
var variables=50;

console.log(variables);
// variables value will be override every time