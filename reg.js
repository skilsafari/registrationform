const form = document.getElementById("from")
const fullname = document.getElementById("fullname")
const defineusername = document.getElementById("defineusername")
const youremail = document.getElementById("youremail")
const phonenumber = document.getElementById("phonenumber")
const dateofbirth = document.getElementById("dateofbirth")
const yourgender = document.getElementById("yourgender")
const writeyourself = document.getElementById("writeyourself")
const password = document.getElementById("password")
const confirmpassword = document.getElementById("confirmpassword")

function checkRequired(input) {
    inputs.forEach((input) => {
        if(input.value.trim() === ""){
            //Error
            errorInput(input,"Please Fill");
            }    else {
                //sucess
              sucessInput(input);  
            }
        
        
    });
}
function getName(input){
    //return input.id;
    return input.getAttribute("data-name");
}
function errorInput(input,message){
     const fromGroup = input.parentElement;
        formGroup.className = "form-group error";
        const p = formGroup.querySelector("p");
        p.innerHTML = message;
       
}
function sucessInput(input){
 const fromGroup = input.parentElement;
 formGroup.className = "form-group sucess";
 const p = formGroup.querySelector("p");
 p.innerHTML = "";
}
form.addEventListener("Sumbit Now", function (e){
    e.preventDefault();
    checkRequired([fullname, defineusername, youremail, phonenumber, dateofbirth, yourgender, writeyourself,password, confirmpassword]);
    checkLength();
});
