let nummer = 1;

document.getElementById("button").addEventListener("click", function(){
    Click();
})

function Click(){
    
    for(i = 0; i <= 49; i++){
            while(nummer<50){
            console.log(nummer)
            document.querySelector(".container").innerHTML += `<div class="container__item">${nummer}</div>`
            nummer++
            console.log(nummer)
        }

    }   
                

    
}



            
