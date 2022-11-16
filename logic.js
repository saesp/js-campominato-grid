//                                     GRIGLIA CAMPO MINATO


// L’utente clicca su un bottone che genererà una griglia di gioco quadrata;
// Ogni cella ha un numero progressivo, da 1 a 100;
// Ci saranno quindi 10 caselle per ognuna delle 10 righe;
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata;



// creare bottone
const buttonGrill = document.getElementById("but-grill");

// creare contenitore griglia
const grill = document.getElementById("grill");

// creare Griglia e farla comparire solo al Click del button
buttonGrill.addEventListener("click",
    function(){
        // creare griglia 100 Celle
        for (let i = 1; i <= 100; i++){
            let cell = grillFun("div", "cell");

            //quando user clicca su una cella, questa si colora di azzurro ed emette un messaggio in console con il numero della cella cliccata
            cell.addEventListener("click",
                function(){
                    cell.classList.toggle("cell-click");
                    console.log("Cell num:", i);
                }
            )
            
            grill.append(cell);
        }
    }
)

function grillFun(elementFun, classFun){
    const elementF = document.createElement(elementFun);
    elementF.classList.add(classFun);
    return elementF;
}














