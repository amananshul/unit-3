var prodDetails = JSON.parse(localStorage.getItem('prod'));
console.log(prodDetails)
function display(prodDetails) {
    document.querySelector("#products_data").innerHTML=null;
prodDetails.map(function(elem,index) {

    var image =document.createElement('img');
    image.setAttribute('src',elem.image)
    var div =document.createElement('div');
    var name=document.createElement('p');
    name.innerText=elem.name
    var price =document.createElement('p');
    price.innerText=elem.price
    var type =document.createElement('p');
    type.innerText=elem.type
    var btn=document.createElement('button');
    btn.innerText="remove"
    btn.addEventListener('click',function(){

        del(index)
    })
    
    div.append(name,price,type,image,btn);
    document.querySelector("#products_data").append(div);
})
}
// }
display(prodDetails);
function del(index){
    prodDetails.splice(index,1)
    console.log(prodDetails)
    display(prodDetails)
    localStorage.setItem("products_data",prodDetailsJSON.stringify(prodDetails))
    
}



document.querySelector("#add_product").addEventListener("click", myloc);
function myloc(){
    window.location.href="index.html"

}