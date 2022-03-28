const nav = () => {
    return `    <div id="nav">
     <a href="index.html"><h3 >Home</h3></a> 
       <a href="search.html"><h3>Search</h3></a>   
          <a href="best.html"><h3>Best of Day</h3></a>
    </div>`
}
const show = async (url) => {
    try {

        let res = await fetch(url);
        let data = await res.json();
        return data

    }
    catch (e) {
        console.log(e)
    }
}

const append = (data, parent) => {
    parent.innerHTML = null;
    data.map((elem) => {
        
        var div = document.createElement('div')
        
        var img = document.createElement('img')
        img.setAttribute("id", "#thumbSingle")
        img.src = elem.strMealThumb;
        
        var p = document.createElement('p')
        p.innerText = elem.strMeal;
        div.append(img, p)
        parent.append(div)
    })
}

const singleappend = (data, parent) => {
    var div = document.createElement('div')
    var img = document.createElement('img')
    img.src=data.strMealThumb
    var title = document.createElement('h2')
    title.innerText=data.strMeal;
    let inst=document.createElement('h4')
    inst.innerText=data.strInstructions
    div.append(img,title,inst)
    parent.append(div)
    
}
export { show, nav, append ,singleappend}
