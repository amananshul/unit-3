//Store the generated number in LocalStorage with key "numbedocume
document.getElementById("throw_dice").addEventListener("click", genrateNo);
var arr=[];
function genrateNo() {
    arr.push(Math.floor(Math.random() *6))
    localStorage.setItem("throwdice", JSON.stringify(arr))
    window.location.href ="display.html"
}
console.log(arr)