function displayRow(){
    let table = document.getElementById("pets");
    let result = "";

    for (let i = 0; i < pets.length; i++){
        let pet = pets[i]
        result += `
       
                <tr id="${i}">
                <td>${i+1}</td>
                <td>${pet.name}</td>
                <td>${pet.age} years</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.service}</td>
                <td>${pet.pay}</td>
                <td><button class="btn btn-danger btn-sm" onclick="deletePet(${i})">Delete</button></td>
                </tr> 
            
        `;          
    }
    table.innerHTML = result;
    displayInfo();
}

function displayInfo(){
    let groomingDiv = document.getElementById("gTotal");
    let totalDiv = document.getElementById("total");
    let grooming=0;

    totalDiv.innerHTML = pets.length
    for (let i = 0; i < pets.length; i++){
        if(pets[i].service == "Grooming"){
            grooming++;
                }
                groomingDiv.innerHTML=grooming
    }
}