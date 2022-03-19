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
    data.forEach(function(el){
        let anc= document.createElement("a");
        let div = document.createElement("div");
        div.setAttribute("id", "sdiv")
        var posters = document.createElement("img")
        posters.setAttribute("id", "posters")
        posters.src=el.Poster

        let p =document.createElement('a')
        p.setAttribute("id", "p")
        p.href="#singleMovie"
        p.addEventListener("click", function() {
         takeMe(el)
        })
        p.innerText=el.Title;
        anc.append(div)
        div.append(posters,p)
        movies.append(div)

    })

}
async function takeMe(el) {
    try {
      let ID = el.imdbID;
  
      let res = await fetch(`https://www.omdbapi.com/?apikey=eaf4b3f5&i=${ID}`);
      let data = await res.json();
  
      singleMovieAppend(data);
      console.log(data, ID);
    } catch (err) {
      console.log(err);
    }
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
function singleMovieAppend(data) {
    let text = document.querySelector("#dataDiv");
    let posterDiv = document.querySelector("#posterDiv");
    //   document.querySelector("#singleMovie").innerHTML = null;
    text.innerHTML = null;
    posterDiv.innerHTML = null;
  
    let poster = document.createElement("img");
    poster.setAttribute("id", "poster");
    poster.src = data.Poster;
    posterDiv.append(poster);
    let name = document.createElement("h1");
    name.innerText = data.Title;
  
    let genre = document.createElement("h3");
    genre.innerText = "Genre:    " + data.Genre;
    let runtime = document.createElement("h3");
    runtime.innerText = "Runtime: " + data.Runtime;
    let rated = document.createElement("h3");
    rated.innerText = "Rated:    " + data.Rated;
    let plot = document.createElement("h4");
    plot.innerText = "Plot: " + data.Plot;
    let imdb = document.createElement("h3");
    imdb.innerText = recomend(data.imdbRating);
  
    let cast = document.createElement("h3");
    cast.innerText = "Cast: " + data.Actors;
    text.append(name, genre, rated, imdb, runtime, cast, plot);
  }
  function recomend(data) {
    let img = document.createElement("img");
    img.src = "script/image.svg";
    if (data >= 7.5) {
      console.log(img);
      return `Imdb:   ⭐     ${data}  Recommended`;
    } else {
      return `Imdb:   ⭐     ${data} `;
    }
  }