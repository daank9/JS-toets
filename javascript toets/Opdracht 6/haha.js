let nummer = 1;

document.getElementById("button").addEventListener("click", function(){
    Click();
})

function Click(){
    
    if(nummer <= 49){
    console.log(nummer)
    document.querySelector(".container").innerHTML += `<div class="container__item">${nummer}</div>`
    nummer++
    console.log(nummer)

    }   
                

    
}



            
