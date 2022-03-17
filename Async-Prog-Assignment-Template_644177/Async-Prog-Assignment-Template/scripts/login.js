var regdUsers = JSON.parse(localStorage.getItem("signUpDetails"));
// console.log(regdUsers);

document.querySelector("#form").addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  var email=document.querySelector("#email").value;
  var pass= document.querySelector("#pass").value;

  // var email = form.email.value;
  // var pass = form.pass.value;
  // console.log(email, pass);

var flag=false;
for(var i=0; i<regdUsers.length; i++)
{
  // console.log(regdUsers[i].user)
  if(regdUsers[i].email==email && regdUsers[i].pass==pass)
  {
    flag=true
    
  }
}
if (flag==true)
{
  alert("success")
  window.location.href = "index.html"

}
else{
  alert("Invalid Credentials")
}
}