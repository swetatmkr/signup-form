let submitButton=document.getElementById("submitButton");

let errors={};

submitButton.addEventListener("click",function(e){
    e.preventDefault();
    let signupForm = document.forms["signupForm"];
    let firstNameInput = signupForm.firstName;
    let lastNameInput = signupForm.lastName;

    if(firstNameInput.value=="")
    {
        errors.firstName="First name should not be empty";
    }

    if(lastNameInput.value=="")
    {
        errors.lastName="Last name should not be empty";
   
        
    }
console.log(errors);
    for (let error in errors){


    }

});

// let lastNameGroup= document.getElementById("lastNameGroup");
// let lastNameMessage= document.querySelector("#lastNameGroup .message");
// lastNameGroup.classList.add("error");
// lastNameMessage.textContent="Last name should not be empty";