emailInput = document.getElementById("email");
passwordInput = document.getElementById("password");
btn = document.querySelector("#login-btn");
form = document.querySelector("form");
message = document.querySelector("#message");

var accountsExsist ;

form.addEventListener("submit" , function(event){
    event.preventDefault() ; 

})

btn.addEventListener("click" ,function(){
if(emailInput.value!="" && passwordInput.value!=""){
    if(localStorage.getItem("accounts") == null){
        accountsExsist =[] ; 
    }
    else{
        accountsExsist=JSON.parse(localStorage.getItem("accounts"));
        console.log(accountsExsist);
    }
}
else{
    message.classList.replace("d-none" , "d-block");
    message.innerHTML = "All inputs is required";}

})


