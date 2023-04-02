let submitButton=document.getElementById("submitButton");

let errors={};

submitButton.addEventListener("click",function(e){
    e.preventDefault();
    errors ={};
    let signupForm = document.forms["signupForm"];
    let firstNameInput = signupForm.firstName;
    let lastNameInput = signupForm.lastName;
    let emailInput = signupForm.email;
    let passwordInput = signupForm.password;

    if(firstNameInput.value== "")
    {
        errors.firstName="First name should not be empty";
    }

    if(lastNameInput.value== "")
    {
        errors.lastName="Last name should not be empty";
        
    }
    if(emailInput.value== "")
    {
        errors.email="Email should not be empty";
        
    } 
    if(passwordInput.value== "")
    {
        errors.password="Password should not be empty";
        
    }
    if(passwordInput.value.length<=5)
    {
        errors.password="Password should be atleast 5 characters";
        
    }
console.log(errors);
    for (let error in errors){
        let lastNameGroup= document.getElementById(`${error}Group`);
        let lastNameMessage= document.querySelector(`#${error}Group .message`);
        lastNameGroup.classList.add("error");
        lastNameMessage.textContent=errors[error];

    }

    if(Object.keys(errors).length==0){
        signupForm.submit();
    }
});

