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
        message.innerHTML = "You are new User please sign up";

    }
    else{
        accountsExsist=JSON.parse(localStorage.getItem("accounts"));
        for(var i =0 ; i<accountsExsist.length ; i++){
            if(accountsExsist[i].email == email.value && accountsExsist[i].password == passwordInput.value  ){
                message.innerHTML = "welcome";
                localStorage.setItem("User" , JSON.stringify(accountsExsist));
                window.location.href="../homePage.html"; 
                break;
            }
            else{
                message.innerHTML = "incorrect email or password";

            }
        }
    }
}
else{
    message.classList.replace("d-none" , "d-block");
    message.innerHTML = "All inputs is required";}

})


