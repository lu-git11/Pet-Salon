
/*
console.log("Welcome to FSDI 104");

//global variable
let globalVariable = "I am a global variable";

function exampleFunction(){
    //local variable
    let localVariable = "I am a local variable";
    console.log(globalVariable);
    console.log(localVariable);
    if(true){
        let blockVariable="This is a block variable";
        console.log(blockVariable);
    }
}

exampleFunction();

// Arrays
let fruits = ["apple","banana","orange"];
console.log(`This is an array: ${fruits}`);
console.table(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[1]="cherry";

console.log(fruits);

//array length
console.log(fruits.length);

//add remove items
fruits.push("watermelon");//add item to end
console.log(fruits);

fruits.pop();//remove from end
fruits.pop();

console.log(fruits);

//add remove from beginning
fruits.unshift("grapes");//add beginning
console.log(fruits);

fruits.shift();//remove begninning
console.log(fruits);

//challenge 1

let names = ["George","Jeffrey","Isai","Rafeal","Erick"];
//loop to iterate through list
for(let i=0; i<names.length; i++){
    console.log(names[i]);
}

//objects-collection of key-value pair
//object literal
/*
    let pbject = {
        key1:value1,
        key2:value2,
        key3:value3
        }
 */
/*
        let person = {
            name:"Mike",
            lastName:"Scott",
            age:40,
            isStudent:false
        }

//access to properties
console.log(`The person name is ${person.name}`);
console.log(person[`age`]);
console.log(person.lastName);
console.log(person.isStudent);

let student1 = {
    name:"Leo",
    email:"leo@gmail.com",
    age:80,
    address:"111 Here St."
}
let student2 = {
    name:"Jon",
    email:"jon@gmail.com",
    age:20,
    address:"222 there St."
}
let student3 = {
    name:"Jen",
    email:"Jen@gmail.com",
    age:100,
    address:"333 Where St."
}
let student4 = {
    name:"Neo",
    email:"neo@gmail.com",
    age:10,
    address:"444 My St."
}

let studentList = [student1,student2,student3,student4];
console.log(`student list: ${studentList.length}`);

document.getElementById("studentCounter").innerHTML=`There are ${studentList.length} in the system.`;

console.log(`email:${studentList[1].email}, address:${studentList[1].address}`);

function getStudentsNames(){
    let list = document.getElementById("studentNames");
    for(let i=0;i<studentList.length;i++){
        console.log(studentList[i].name);
        list.innerHTML+=`<li> ${studentList[i].name} </li>`
    }
}

getStudentsNames();

*/


