let movies = document.getElementById("movies");
 async function searchMovie(){
     try{

         let input= document.getElementById("query").value;
         
        //  console.log(input)
         let result= await  fetch(`https://www.omdbapi.com/?apikey=9b4ab53f&s=${input}`)
         let data = await result.json()
         console.log(data)
         
         let arrayMovie=data.Search
         return arrayMovie
        //  append(arrayMovie)

        }
        catch (error) {
        console.log(error)
        }
}
function appendmovies(data){
    movies.innerHTML=null;
    if(data==undefined){
        return false;
    }
    data.forEach(function(elem){
        let anc= document.createElement("a");
        let div = document.createElement("div");
        div.setAttribute("id", "sdiv")
        var posters = document.createElement("img")
        posters.setAttribute("id", "poster")
        posters.src=elem.Poster

        let p =document.createElement('a')
        p.setAttribute("id", "p")
        p.href="#singleMovie"
        p.addEventListener("click", function() {
         takeme(el)
        })
        p.innerText=elem.Title;
        anc.append(div)
        div.append(posters,p)
        movies.append(div)

    })

}
async function main() {
   try{
       let data= await searchMovie()
       if(data==undefined){
           return false
       }
       appendmovies(data);

   } 
   catch (error){
    console.log(error)
   }
}