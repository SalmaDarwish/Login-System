var welcomeName=document.getElementById("welcomeName");
var NameWelcome=JSON.parse(localStorage.getItem("uName"))
welcomeName.innerHTML=`Weclome ${NameWelcome}`