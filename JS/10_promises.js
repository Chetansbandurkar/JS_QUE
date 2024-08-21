// promises

// syncs and async code


// sync exec (line by line execuion)
// console.log("start");

// console.log("nice to meet you");

// console.log("finish");

// ASYNC CODE
// javascript execute the sync code first and then async code

// console.log("start");

// setTimeout(() => {
//     console.log("nice to meet you");
// }, 1000);


// console.log("finish");

// console.log("start");
// function impAct(username){
//     setTimeout(()=>{
//         return `subscribe to ${username}`;
//     },1000);
// };
// const message=impAct("chetan ");
// console.log(message);


// console.log("stop");

console.log("finish");

function impAct(username,cb) {
    setTimeout(() => {
        cb( `subscribe to ${username}`);
    }, 1000);
};
const message = impAct("chetan ",function (message) {
    console.log(message);
});
// by using call back we will get the message
// console.log(message);
// 

console.log("stop");

// PROMISE,promise chaining

// combinator 
// 1>promise.all 
// which will tak an array if 
// if one promise fail all will get fail
Promise.all([])
// 2>Promise.race
// which will return a promise which get succeed
// 3>promis.all settled
// any one of the promise faild also it will return all 
// the promises status
// 4>Promise.any
// return first resolve promis and ignore re jected 


// ASYNC AWAIT

// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., a network request)
   
        const success = true; // You can change this to false to see how reject works

        if (success) {
            resolve("Operation was successful!"); // This will call the 'then' handler
        } else {
            reject("Operation failed."); // This will call the 'catch' handler
        }
    // 2-second delay
});

// Using the Promise
myPromise
    .then((message) => {
        console.log(message); // This runs if the promise is resolved
    })
    .catch((error) => {
        console.error(error); // This runs if the promise is rejected
    });
