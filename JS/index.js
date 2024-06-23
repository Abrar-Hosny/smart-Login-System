var form = document.querySelector("form"); 
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var name = document.querySelector("#name");
var btn = document.querySelector("button"); 
var message =document.querySelector("#message")



form.addEventListener("submit" , function(e){
    e.preventDefault(); 

})



btn.addEventListener("click" , function(){
   if(email.value != null && name.value!=null && password!=null){
   
    if(email.classList.contains("is-valid") && password.classList.contains("is-valid")){
        message.classList.replace("d-none" , "d-block");
        message.innerHTML = "success";
        message.classList.remove("")
        
        var emailValue = email.value ; 
        var passwordValue = password.value ; 
        
        
            }
   }
    else{
message.classList.replace("d-none" , "d-block");
message.innerHTML = "All inputs is required";

    }
})







function validation(){
regex={
    email:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 
    password :/[a-zA-Z0-9@]{6}/
}


}