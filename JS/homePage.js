var user = JSON.parse(localStorage.getItem("User"));
var loginBtn = document.getElementById("logout");

header = document.querySelector("h1");
if(user==null){
    window.location.href="../loginPage.html"; 

}
else{
    header.innerHTML = "👋 welcome, "+user[0].name;
}

loginBtn.addEventListener("click" , function(){
    localStorage.removeItem("User");
    window.location.href="../loginPage.html"; 


})
