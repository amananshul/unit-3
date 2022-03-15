 
document.getElementById("submit").addEventListener("click",myForm)
function myForm(event) {
    event.preventDefault();

    // let promise = new Promise((resolve, reject) => {
    
    if (document.querySelector("#number").value !== undefined) {
        setTimeout(() => {
            // Math.random() * 10000
           alert("Your order is accepted")
        },0)
    }
    
        if(document.querySelector("#name").value !== undefined){
         
            setTimeout(() => {
                // Math.random() * 100
               alert("Your order is being prepared")
            },3000)
            
         
        }
        if(document.querySelector("#address").value !== undefined){
         
            setTimeout(() => {
                // Math.random() * 100
               alert("Your order is processing")
            },8000)
            
         
        }
       
         
            setTimeout(() => {
                // Math.random() * 100
               alert("Your order is out for delivery")
            },10000)
            
         
         
            setTimeout(() => {
                // Math.random() * 100
               alert("Your order is delivered")
            },12000)
            
         
        
        
    
}

