var user = JSON.parse(localStorage.getItem("User"));
console.log(user);
header = document.querySelector("h1");
header.innerHTML = "👋 welcome, "+user[0].name;
