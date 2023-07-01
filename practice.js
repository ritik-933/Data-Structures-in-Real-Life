let a=10;
console.log(a);
b=[1,2,3,4];
console.log(b);
console.log("Hello World");
// variables,Arrays,Functions,Loops,Objects
c=20;//global variable
var d=34;//function scope
let e=43;//block scope

function fun(){
    a=4;
    if (a==4){
        let b=5;
        console.log("Inside",b);
    }
    console.log("outside",a);
}
console.log(a)
sqrt(10)
// s(10)// it gives error because the function is not hoisted, its not declared like function s()
    // if it be declared below the function it will run
function sqrt(n){
    console.log(Math.sqrt(n))
    return 5;
}
// Function Hoisting

var s=function(){
    console.log("In s function")
    return ;
}
// Array in Javascript

let arr=[1,3,5]
console.log(arr)
//Traversing over array
for (let i=0;i<3;i+=1){
    console.log(arr[i]);
}
arr.pop()//remove from back
arr.shift()//remove from front
arr.unshift(3)//insert from front
console.log(arr)
console.log(arr.indexOf(3))
arr.push("Banana")
//







