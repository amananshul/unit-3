var obj=function(name){
    console.log(`my name is ${name} and i have proffesion of ${this.proffesion}`)
}
const amarObj= {
    name:"amar",
    proffesion:"singer",
    city:"Goa"
}
const akbarObj={
    name:"akbar",
    proffesion:"chef",
    city:"mumbai"
}
const anthonyObj={
    name:"anthony",
    proffesion:"Magician",
    city:"kashmir"
}

obj.call(akbarObj,"amar")
obj.call(amarObj,"anthony")
obj.call(anthonyObj,"akbar")

