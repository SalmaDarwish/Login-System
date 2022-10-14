// General Variables -----------//


var userName = document.getElementById("name");
var userEmail = document.getElementById("email");
var userPassword = document.getElementById("userPassword");
var signUpBtn = document.getElementById("signUp");
var loginBtn = document.getElementById("loginBtn");
var loginPage = document.getElementById("loginPage");
var loginMessage = document.getElementById("loginMessage");
var userData = JSON.parse(localStorage.getItem("userlist"));

// General Variables -----------//


function isInputEmpty() {
  if (userEmail.value == "" || userPassword.value == "") {
    loginMessage.innerHTML = "All inputs are required";
    loginMessage.classList.replace("d-none", "d-block");

    return true;
  } else {
    loginMessage.classList.replace("d-block", "d-none");
    return false;
  }
}
function clearField() {
    email.value = "";
    userPassword.value = "";
}
function isInputValid() {
    if(userData ==null){
        loginMessage.classList.replace("d-none", "d-block");
        loginMessage.innerHTML = "incorrect email or password";
    }

    if(userData !== null){
       for (var i =0; i < userData.length;i++) {
    if (
      userData[i].userEmail.includes(userEmail.value)==true &&
      userData[i].userPassword.includes(userPassword.value)==true
    ) {
        loginMessage.classList.replace("d-block", "d-none");

      loginPage.setAttribute("href", "welcome.html");
      const index = userData.findIndex(object => {
        return object.userEmail === userEmail.value;
      });
      var welcome=userData[index].userName
      window.localStorage.setItem("uName",JSON.stringify(welcome))
      clearField()


    } 
    else if (userData[i].userEmail.includes(userEmail.value)==false ||userData[i].userPassword.includes(userPassword.value)==false){
      loginMessage.classList.replace("d-none", "d-block");
      loginMessage.innerHTML = "incorrect email or password";
    }
  } 
    }
  
}

function validLogin() {
  if (isInputEmpty() == false ) {
    isInputValid();
  }
}


loginBtn.addEventListener("click", function () {
    validLogin();

});

  
