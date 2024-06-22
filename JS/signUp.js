NameInput = document.getElementById("name");
emailInput = document.getElementById("email");
passwordInput = document.getElementById("password");

var emailList = [] ; 



function addEmail (){
emailList.push(
    {name : NameInput.value , 
        email : emailInput.value , 
        passwordInput : passwordInput.value 
    }
)
localStorage.setItem("accounts" , JSON.stringify(emailList)); 

}


