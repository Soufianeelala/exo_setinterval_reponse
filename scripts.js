
// exo___1__________________________________________________________________________________________________________________________________________

// const welcome = document.getElementById("welcome");

// setTimeout( function() {
//     console.log("Bienvenue dans le monde du JavaScript !")
// }, 2000);
// clearTimeout(welcome);
    
   
// exo __2_________________________________________________________________________________________________________________________________________



// let countdown = document.getElementById("countdown");
// let compte = 5;

// function sayGO() {
//     if (compte > 0) {
//         countdown.textContent = compte;
//         compte--;
//     } else {
//         countdown.textContent = "Go!";
//         clearInterval(interval); // Stop the countdown when it reaches 0
//     }
// }

// let interval = setInterval(sayGO, 1000); // Update every 1 second

// exo __3_______________________________________________________________________________________________________________________________________
let blink = document.getElementById("blink");
let Clignotant = 0.5;
function messageClignotant(){
    if (Clignotant > 0){
        blink.textContent = "Clignotant";
        Clignotant--;
    }
    else {
        clearInterval(blink);
        blink.textContent = "Clignotant arreter";

    }
}
let MC = setInterval(messageClignotant, 500)

// exo_____4____________________________________________________________________________________________________________________________________
function updateClock() {
    const now = new Date(); // Obtenir l'heure actuelle
    const hours = String(now.getHours()).padStart(2, '0'); // Format HH
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Format MM

    // Affiche l'heure formatée (HH:MM)
    document.getElementById("clock").textContent = `${hours}:${minutes}`;
}

// Mettre à jour l'horloge chaque seconde
setInterval(updateClock, 1000);

// Appel initial pour afficher l'heure immédiatement
updateClock();
