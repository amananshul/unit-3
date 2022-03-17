document.querySelector("#form").addEventListener("submit", myFormSubmit);

var signupArr = JSON.parse(localStorage.getItem("signUpDetails")) || [];

function myFormSubmit() {
  event.preventDefault();

  var signupObj = {
    email: document.querySelector("#email").value,
    username: document.querySelector("#user").value,
    pass: document.querySelector("#pass").value,
  };
  signupArr.push(signupObj);
  localStorage.setItem("signUpDetails", JSON.stringify(signupArr));
  window.location.href = "login.html";
}