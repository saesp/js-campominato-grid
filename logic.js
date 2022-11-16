//                                     GRIGLIA CAMPO MINATO


// L’utente clicca su un bottone che genererà una griglia di gioco quadrata;
// Ogni cella ha un numero progressivo, da 1 a 100;
// Ci saranno quindi 10 caselle per ognuna delle 10 righe;
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata;



// creare bottone
const buttonGrill = document.querySelector("but-grill");

// creare contenitore Griglia
const grill = document.querySelector("div.grill");

// creare griglia 100 Celle e farla comparire solo al click del button
for (let i = 1; i <= 100; i++){
    let cell = grillFun("div", "cell");
    grill.append(cell);
}

buttonGrill.addEventListener("click",
    function(){
        grill.classList.add("visible");
    }
)

function grillFun(elementFun, classFun){
    const elementF = document.createElement(elementFun);
    elementF.classList.add(classFun);
    return elementF;
}


