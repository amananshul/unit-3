var imgData=JSON.parse(localStorage.getItem('data'))
var container=document.querySelector("#slideshow")
let i=0;
container.innerHTML=null;
var img=document.createElement('img');
img.src=imgData[i].img
container.append(img)

setInterval (function(){
    container.innerHTML=null;
    if(i==imgData.length){
        i=0;
    }
    let image=imgData[i].img
    var img=document.createElement('img');
    img.src=image
    container.append(img)
    i++
},3000)

display(imgData)

function display(imgdata){

    imgData.map(function(elem,index){
        var div=document.createElement('div')
        div.setAttribute('class', 'div')
        var img=document.createElement('img')
        img.setAttribute('src',elem.img)
        var name=document.createElement('p')
        name.setAttribute('class','name')
        name.innerText=elem.name
        var genre=document.createElement('p')
        genre.setAttribute("class","genre")
        genre.innerText=elem.genre
        var rating=document.createElement('h4')
        rating.innerText=elem.rating
        div.append(img,name,genre,rating)
        document.querySelector('#movies').append(div)

    })
}
// sorting starts here
// sort()
// function sort() {
    
//     if(order==0){
//         for(let i=0;i<imgData.length-1;i++){
//          for(let j=0;j<imgData.length-i-1;j++){
//             if(imgData[j].rating>imgData[j+1].rating){
//                 swap(j,j+1,imgData)
//             } 
//          }
//         }
//     }

//     else{
//         for(let i=0;i<imgData.length-1;i++){
//             for(let j=0;j<imgData.length-i-1;j++){
//                if(imgData[j].rating<imgData[j+1].rating){
//                    swap(j,j+1,imgData)
//                } 
//             }
//            }

//     }
// }
// function swap(i,j,imgData){
//     let temp=j;
//         j=i;
//         i=temp;      
// }
document.querySelector("#sort").addEventListener("change", function () {
    priceSort(imgData)
})
function priceSort(imgData) {
    var getValue = document.querySelector("#sort").value;
    console.log(getValue);
    if (getValue == "H2L") {
        var x = imgData.sort(function (a, b) {
            return b.rating - a.rating;
        });
        display(x);
    } else if (getValue == "L2H") {
        var y = imgData.sort(function (a, b) {
            return a.rating - b.rating;
        });
        display(y);
    }
    //  else {
    //     imgData =  JSON.parse(localStorage.getItem("imgData"));
    //     display(imgData);
    // }
}
