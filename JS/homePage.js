var user = JSON.parse(localStorage.getItem("User"));
var loginBtn = document.getElementById("logout");

header = document.querySelector("h1");

if(user!=null){
    console.log(user)
    header.innerHTML = "👋 welcome, "+user.name;

}



loginBtn.addEventListener("click" , function(){
    if(user!=null){
        console.log(user)
        header.innerHTML = "👋 welcome, "+user.name;
        localStorage.removeItem("User");
        window.location.href="../loginPage.html"; 
    
    }
    else{
        window.location.href="../loginPage.html"; 

    }
  


})
