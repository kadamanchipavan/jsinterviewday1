//1Q
var a=10
var b=20
a==b
a===b
console.log(false)
console.log(true)

// const arr=[1,2,3,4]
// // console.log(arr)


// const arr1=[...arr]
// console.log(arr1)
// // const [...rest]=arr
// // console.log(rest)
// const[one,two,...rest]=arr1
// console.log(rest)

//2Q
let arr3=[1,2,3,4,5,6]
console.log(...arr3, "is spreading")
let [firstelemnt,secondelemnt,...rest]=arr3
console.log(rest)
//3Q
var a=10;
var a=20;
console.log(a); //for var function
// let c=20;
// let c=60;
// console.log(d)

// const pav=20;
// pav =25;
// console.log(pav)

//4Q
var x=20
console.log(x)
function inside(){
    console.log(x)
    var x=30
}
inside();
//5Q
let myfun=function(){
    console.log("hello")
}
myfun();
//6Q
function out(){
    let abc="pavan";
    function ins(){
        console.log(abc)
    }
    ins();
}
out();