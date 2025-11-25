// operators in JS

// arithematic
// console.log(8+5);
// console.log(8-5);
// console.log(8*5);
// console.log(8/5);
// console.log(8%5);
// console.log(8**2);

//unary
// let a = 5;
// let b = 2;
// console.log(++a)
// console.log(a+b);
// console.log(a++)
// console.log(a)
// console.log(a+b)

// alert("Good morning");

// string methods
// let name = "   prathamesh   ";
// console.log(name);
// console.log(name.trim());
// console.log(name.toUpperCase().trim());
// console.log(name.replace('p','q'));

// array

// let fruits = ["mango","apple","litchi"];

// for(let i = 0; i<=fruits.length; i++){
//     console.log(i, fruits[i]);
// }
// for(fruit of fruits){
//     console.log(fruit);
// }
// console.log(fruits[1]);
// fruits.push("Banana");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);

// console.log(fruits.includes("mango"));

// let boys = ["ramjan", "anurag", "yash"];
// console.log(fruits+boys);
// console.log(boys.concat(fruits))
// console.log(fruits.reverse());


// loops

// for(let i = 1; i<=5; i++){
//     console.log(i);
// }

// let i = 1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// let heroes = [
//     ["ironman", "spiderman", "thor"],
//     ["superman", "wonderman", "flash"]
// ]

// for(let i = 0; i<heroes.length; i++){
//     console.log(`list ${i}`);
//     for(let j = 0; j<heroes[i].length;j++){
//         console.log(heroes[i][j]);
//     }
// }

// for(list of heroes){
//     for(li of list){
//         console.log(li);
//     }
// }

// Object
// const student = {
//     name:"Prathamesh",
//     age:23,
//     marks:88,
//     city:"Yelavi"
// }

// console.log(student)
// console.log(student.name)
// student.name = "Ramjan";
// console.log(student.name)
// delete student.name;
// console.log(student)

// function
// function namste(){
// console.log("Namste..!");
// }
// namste();

// const namste = function(){
//     console.log("Namste sir..!");
// }
// namste();

// function additon(a,b){
//     return a+b;
// }
// console.log(additon(3,5));

// const mul = function(c,d){
//     return c*d;
// }
// console.log(mul(19,3))


let str = ["ramjan", "anurag", "yash"];
function cncat(str){
    let result="";
    for(st of str){
        result+=`${st} `;
    }
    return result;
}

console.log(cncat(str));





