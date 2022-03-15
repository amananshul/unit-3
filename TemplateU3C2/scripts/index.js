var cartArr=[]
async function showFood(){
    try{
        let res= await fetch(`https://masai-food-api.herokuapp.com/api/meals/india`)
    let data=await res.json();
    console.log(data[0].meals);
    displayFood(data[0].meals)
    }
    catch(error){
        console.log(error)
    }

}
showFood()
var container=document.getElementById("menu")
 function displayFood(data){

  data.map(function(elem,index){
    //   container.innerHTML=null;
    var div=document.createElement("div")
    var avatar = document.createElement("img")
    avatar.src=elem.strMealThumb
    // console.log(avatar)
    var price = document.createElement("h3")
    price.innerText=elem.price
    var meal= document.createElement("h3")
    meal.innerText=elem.strMeal

    var btn= document.createElement("button")
    btn.setAttribute("id","addtocart")
    btn.innerText="Add to cart"
    btn.addEventListener("click",function(){
        add(elem)
    
    })


    div.append(avatar, meal,price,btn)
    container.append(div)
  })
  function add(elem) {
      cartArr.push(elem)
      console.log(cartArr)
    //    elem.quant=1
    //   elem.quant++
    counter()
      localStorage.setItem('cart', JSON.stringify(cartArr))
      
  }

 } 
//  let counter=0
 function counter(){
    document.querySelector("#count").innerText=cartArr.length

 }
 
