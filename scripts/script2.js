
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
let inputPay = document.getElementById("txtPay");

//constructor
function Pet(name,age,gender,breed,service,pay){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.pay=pay;
}

//register function
function register(){
    //create obj
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputPay.value);
    
//push obj to array

    if(isValid(newPet)){
        pets.push(newPet);
        //clearing inputs
        //disaply pets in browser
        clearInputs();
        displayRow();
    }
    //push
    console.log(pets);
}

//validate form
function isValid(pet){
    let validation = true;//boolean result
    
    if(pet.name == ""){
        validation = false;
        //alert("name cannot be empty")
        inputName.classList.add("error");
    }

    if(pet.age == ""){
        validation = false;
        //alert("age cannot be empty")
        inputAge.classList.add("error");
    }
    return validation;
}
function deletePet(petId){
    console.log("deleting pet with Id: " + petId)
    document.getElementById(petId).remove();
    pets.splice(petId,1);
    displayRow();
    displayInfo();
}

function clearInputs(){
    inputAge.value = "";
    inputName.value = "";
    inputGender.value = "";
    inputBreed.value = "";
    inputService.value = "";
    inputPay.value = "";
}


//init function
function init(){
    //three objects
    let pet1 = new Pet("Scooby",99,"Male","Dane","Grooming","cash");
    let pet2 = new Pet("Bear",9,"Female","Duck","nail trimming","card");
    let pet3 = new Pet("Juno",999,"Male","Moose","vaccination","gift");

    //push object to array
    pets.push(pet1,pet2,pet3);
    console.log(pets);
    displayRow();
}

window.onload=init;//wait to render html