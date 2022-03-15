var container=document.getElementById("cart")
var cart=JSON.parse(localStorage.getItem('cart'));
// console.log(cart);
function displayCart(cart){

    cart.map(function(elem,index){
        var div=document.createElement("div")
        var avatar = document.createElement("img")
        avatar.src=elem.strMealThumb
        // console.log(avatar)
        var price = document.createElement("h3")
        price.innerText=elem.price
        var meal= document.createElement("h3")
        meal.innerText=elem.strMeal
    
        var remove= document.createElement("button")
        remove.setAttribute("id","remove")
        remove.innerText="Remove"
        remove.addEventListener("click",function(){
            add(index)
        })
        div.append(avatar, meal,price,remove)
        container.append(div)
    })
}
displayCart(cart)
function add(index){
    container.innerHTML = null
    cart.splice(index,1)
    // console.log(cart)
    showTotalCart()
    displayCart(cart)
    localStorage.setItem("cartArr",JSON.stringify(cart))
    
}
function showTotalCart(){
var total=cart.reduce(function(acc,elem){
     return acc+=elem.price

},0)
console.log(total)
document.querySelector("#total-price").innerText=total
}
console.log(showTotalCart())

