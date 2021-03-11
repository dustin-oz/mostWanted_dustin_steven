'use strict';


let tagArray = ["id", "firstName", "lastName", "gender", "dob", "height", "weight", 
"eyeColor", "occupation", "parents", "currentSpouse"]

function searchByName(){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;

    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = people.filter(function (person) {
        if(person.firstName === firstNameInput && person.lastName === lastNameInput){
            return true;
        }
        return false;
    });
    console.log(filteredPeople[0].id);
    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredPeople.length > 0){
        for (let i = 0; i < filteredPeople.length; i++){
            document.getElementById("id").innerHTML = filteredPeople[0].tagArray[i]

        }
     
  
  
       
        
    }else{

        
    }
}
