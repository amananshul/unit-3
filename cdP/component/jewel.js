const getData=async(url)=>{
    try{
        
        let res=await fetch (url);
        let data= await res.json();
        return data

    }
    catch(e){
        console.log(e)
    }
}
const append=(data,parent)=>{
    parent.innerHTML=null;
data.map(({image,title,price})=>{

    var div=document.createElement('div')

    var img=document.createElement('img')
    img.src=image;

    var t=document.createElement('p')
    t.innerText=title;
    var p=document.createElement('p')
    p.innerText=price;
    div.append(img,t,p)
    parent.append(div)
})

}
export{getData,append}

