function displayRow(){
    let table = document.getElementById("pets");
    let result = "";

    for (let i = 0; i < pets.length; i++){
        let pet = pets[i]
        result += `
        <table id="${i}" class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Breed</th>
                    <th scope="col">Service</th>                   
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>${i+1}</td>
                <td>${pet.name}</td>
                <td>${pet.age} years</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.service}</td>
                <td><button class="btn btn-danger btn-sm" onclick="deletePet(${i})">Delete</button></td>
                </tr> 
            </tbody>
        </table>
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