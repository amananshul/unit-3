//store the products array in localstorage as "products"
document.querySelector("#submit").addEventListener("click", myForm);
var prodArr=[]
function myForm(event) {
    event.preventDefault()
    var name =document.getElementById("name").value;
    var type=document.getElementById("type").value;
    var price = document.getElementById("price").value;
    var image = document.getElementById("image").value;
    var obj={
        name:name,
        type:type,
        price:price,
        image:image,
    }
    prodArr.push(obj);
    console.log(prodArr);
// var x="aman"
    localStorage.setItem("prod",JSON.stringify(prodArr))
    // console.log(prodArr);
    // window.location.href="inventory.html"
}
document.querySelector("#show_products").addEventListener("click", myloc);
function myloc(){
    window.location.href="inventory.html"

}
