// arrow functions
// settimeout and setInterval
// console.log("hiii..");
// setTimeout(()=>{
//     console.log("My name is Prathamesh");
// },4000);
// console.log("what is your name..?");

// setInterval(()=>{
//     console.log("Good morning...")
// },4000);


// methods of Array

let arr = [1,22,2,3,4,5];

// foreach
// function print(el){
//     console.log(el);
// }
// arr.forEach(print);

// arr.forEach(function(el){
//     console.log(el);
// })


// map
// let square = arr.map((el)=>{
//     return el*el;
// })
// console.log(square);

// filter
// let evenArr = arr.filter((el)=>(el%2==0));
// console.log(evenArr)

// console.log(arr.reduce((acc,el)=>(acc+el)));

// let max = arr.reduce((max,el)=>{
//     if(max>el){
//         return max;
//     }else{
//         return el;
//     }
// })
// console.log(max);

// console.log(Math.max(...arr));
// console.log(Math.min(...arr));


// destructuring
// let studentInfo = {
//     name:"Prathamesh",
//     age:23,
//     marks:98
// }

// const{ name, age, marks} = studentInfo;
// console.log(name);
// console.log(age);
// console.log(marks)


// DOM document Object model
// 1.select
// 2.chages/ manipulation

// getelementById
// getelementbyclassname

let h1 = document.querySelector('h1');
h1.innerText = "Prathamesh";
h1.style.backgroundColor = "red";
h1.style.color = "white";

// let btn2 = document.createElement("button");
// btn2.innerText = "Reset";
// let btn1 = document.getElementById("btn");
// btn1.before(btn2);


let input = document.getElementById("firstName");
input.addEventListener("input", ()=>(console.log(input.value)));

let button = document.getElementById("btn");
button.onclick = ()=>(
    console.log("btn was clicked..")
)


