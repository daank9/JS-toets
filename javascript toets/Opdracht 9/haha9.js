

document.getElementById("button").addEventListener("click", function(){
    Click();
})

function Click(){
    let nummer = []
    for(i = 0; i <= 49; i++){
        
        nummer[i] = Math.floor(Math.random()*900)+100;
        console.log(nummer[i])
        document.querySelector(".container").innerHTML += `<div class="container__item">${nummer[i]}</div>`
        console.log(nummer)
        

    }   
                

    
}
