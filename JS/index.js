var form = document.querySelector("form"); 
var nameInput = document.querySelector("#name");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var btn = document.querySelector("button"); 
var message =document.querySelector("#message"); 
var allInputs = document.querySelectorAll("input"); 



form.addEventListener("submit" , function(e){
    e.preventDefault(); 

})



btn.addEventListener("click" , function(){
   if(email.value != "" && nameInput.value!="" && password!=""){
    console.log(email.value , nameInput.value , password.value);

    message.classList.replace("d-none" , "d-block");
    message.innerHTML = "success";
    message.classList.remove("text-danger");
    message.classList.add("text-success");
    
    var emailValue = email.value ; 
    var passwordValue = password.value ; 
    
    // if(email.classList.contains("is-valid") && password.classList.contains("is-valid")){
        
        
    //         }
   }
    else{

message.classList.replace("d-none" , "d-block");
message.innerHTML = "All inputs is required";

    }
})



for (var i =0 ; i < allInputs.length ; i++){
//    IIFE => immediately invoked function expression 
// will help to catch the current i beacause the var key word we can solve the problem 
// with 2 ways 1- change var to let or add iife


    (function(i){
        allInputs[i].addEventListener("input" , function(){ 
            var regex = {
                name:/[^@\.\-0-9][a-zA-Z]{3,8}$/,
                email:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 
                password :/[a-zA-Z0-9@]{6}/
            }
            
    if(regex[allInputs[i].id].test(allInputs[i].value)){
        console.log("yess")

    }
    else{
        console.log("Ni")

    }
    
    })
   })(i);
}



