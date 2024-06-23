emailInput = document.getElementById("email");
passwordInput = document.getElementById("password");
btn = document.querySelector("#btn");

var accountsExsist ;

btn.addEventListener("click" ,function(){
if(localStorage.getItem("accounts") == null){
    accountsExsist =[] ; 
}
else{
    accountsExsist=JSON.parse(localStorage.getItem("accounts"));
    console.log(accountsExsist)
}
})