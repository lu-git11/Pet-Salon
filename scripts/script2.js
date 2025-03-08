
/*
//object constructor
function Student(name,email,age,address){
    this.name = name;
    this.email = email;
    this.age = age;
    this.address = address;
}


let student1 = new student("Rafael","Rafela.sdgku.com",20,"apple street");

let student2 = new student("Jeff","Jeff.sdgku.com",30,"pear street");

let student3 = new student("Lisa","Lisa.sdgku.com",40,"plum street");
console.log(student1,student2,student3)
*/
//getting input from 
let pets=[];
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputType = document.getElementById("txtType");

//constructor
function Pet(name,age,gender,breed,service,type){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.type=type;
}

//register function
function register(){
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputType.value);
    let list = document.getElementById("newPet");
    for(let i=0;i<newPet;i++){
        console.log(newPet[i].name);
        list.innerHTML+=`<li> ${newPet[i].name}</li>`
    }
 //   document.getElementById("label").textContent = ``;

    //push
    pets.push(newPet);
    console.log(pets);
}

//function clearInputs(){
//    document.getElementById("label").textContent = ``;


//init function
function init(){
    //three objects
    let pet1 = new Pet("Scooby",99,"Male","Dane");
    let pet2 = new Pet("Bear",9,"Female","Duck");
    let pet3 = new Pet("Juno",999,"Male","Moose");

    //push object to array
pets.push(pet1,pet2,pet3);

console.log(pets);

}

window.onload=init;//wait to render html