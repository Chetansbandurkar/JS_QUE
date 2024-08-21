//  example f(a,b) into f(a)(b)
// currying
function f(a){
    return function(b){
        return `${a} ${b}`;
    };
};
console.log(f(5)(6));
// why we use /currying 


// https://roadsidecoder.hashnode.dev/javascript-interview-questions-currying-output-based-questions-partial-application-and-more

// Q2 ->sum(2)(5)(6);

function sum(a,b,c){
    return a + b + c;
}

console.log(sum(1,2,3));

function summ(a){
    return function (b){
        return function (c){
            return a + b + c;
        }
    }
}
console.log(summ(4)(5)(6)); //if only summ(4) then we will get function  check in console log browser