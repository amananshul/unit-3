//here retrieve the generated number from Localstorage.
var num=JSON.parse(localStorage.getItem("throwdice"));
document.getElementById("show_number").innerHTML=num;