// General Variables -----------//

var userName = document.getElementById("userName");
var userEmail = document.getElementById("email");
var userPassword = document.getElementById("userPassword");
var signUpBtn = document.getElementById("signUp");
var userData = [];
var nameList = [];
var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// General Variables -----------//

if (localStorage.getItem("userlist") == null) {
  userData = [];
} else {
  userData = JSON.parse(localStorage.getItem("userlist"));
}
function setToLocalStorage() {
  window.localStorage.setItem("userlist", JSON.stringify(userData));
}

function signUp() {
  var user = {
    userName: userName.value,
    userEmail: userEmail.value,
    userPassword: userPassword.value,
  };

  if (SignUpValid()) {
    userData.push(user);
    setToLocalStorage();
    clearField();
    document.getElementById("success").innerText = "Success";
    document.getElementById("success").classList.replace("red", "green");
  }
}
function clearField() {
  userName.value = "";
  email.value = "";
  userPassword.value = "";
}
signUpBtn.addEventListener("click", function () {
  signUp();
});
function isEmailRepeated() {
  for (var i = 0; i < userData.length; i++) {
    if (userData[i].userEmail.includes(userEmail.value)) {
      document.getElementById("success").innerHTML = "Email already exists";
      document.getElementById("success").classList.replace("green", "red");
      return true;
    }
  }
}
function isInputEmpty() {
  if (
    userName.value == "" ||
    userEmail.value == "" ||
    userPassword.value == ""
  ) {
    document.getElementById("success").innerHTML = "All inputs are required";
    document.getElementById("success").classList.replace("green", "red");
    return true;
  }
}
function isEmailValid() {
  if (regexEmail.test(userEmail.value) == false) {
    document.getElementById("success").innerHTML = "invalid Email";
    document.getElementById("success").classList.replace("green", "red");
    return false;
  }
}

function SignUpValid() {
  if (isInputEmpty() !== true) {
    if (isEmailValid() !== false) {
      if (isEmailRepeated() !== true) {
        return true;
      }
    }
  }
}
