const contenantChoixOrdinateur = document.querySelector('#choix-ordinateur')
const contenantChoixUtilisateur = document.querySelector('#choix-utilisateur')
const contenantResultat = document.querySelector('#resultat-jeu')

const choixPossibles = document.querySelectorAll('button');
let choixUtilisateur
let choixOrdinateur
let resultat 


// evenement 'click sur les boutons'
choixPossibles.forEach(choixPossibles => choixPossibles.addEventListener('click', (event) => {
    // recup id bouton cliqué
    choixUtilisateur = event.target.id

    // On ajoute l'image qui correspond
    // contenantChoixUtilisateur.innerHTML = `<p>${choixUtilisateur}</p>`
    contenantChoixUtilisateur.innerHTML = `<img src="./assets/img/${choixUtilisateur}.png">`
    genererChoixOrdinateur()
    GagneOuNon()
}))

// fonction pour générer le choix ordi 
function genererChoixOrdinateur() {
    random = Math.floor(Math.random() * 3) + 1 // Générer des nombres compris entre 1 et 3

    if (random === 1) {
        choixOrdinateur = "pierre"
    }
    if (random === 2) {
        choixOrdinateur = "feuille"
    }
    if (random === 3) {
        choixOrdinateur = "ciseaux"
    }

    // contenantChoixOrdinateur.innerHTML = `<p>${choixOrdinateur}</p>`
    contenantChoixOrdinateur.innerHTML = `<img src="./assets/img/${choixOrdinateur}.png">`

}

// Fonction pour afficher si le joueur a gagné

function GagneOuNon() {
    if(choixUtilisateur == choixOrdinateur) {
        resultat = "Égalité.";
        contenantResultat.innerHTML = `<p>${resultat}</p>`
    } 
    // Le joueur gagne
    if(choixUtilisateur == "pierre" && choixOrdinateur == "ciseaux") {
        resultat = "Gagné !";
        contenantResultat.innerHTML = `<p>${resultat}</p>`
    } 

    if(choixUtilisateur == "ciseaux" && choixOrdinateur == "feuille") {
        resultat = "Gagné !";
        contenantResultat.innerHTML = `<p>${resultat}</p>`
    }

    if(choixUtilisateur == "feuille" && choixOrdinateur == "pierre") {
        resultat = "Gagné !";
        contenantResultat.innerHTML = `<p>${resultat}</p>`
    }

    // Le joueur perd
    if(choixUtilisateur == "ciseaux" && choixOrdinateur == "pierre") {
        resultat = "Perdu...";
        contenantResultat.innerHTML = `<p>${resultat}</p>`
    }
    
    if(choixUtilisateur == "feuille" && choixOrdinateur == "ciseaux") {
        resultat = "Perdu...";
        contenantResultat.innerHTML = `<p>${resultat}</p>`
    }
    
    if(choixUtilisateur == "pierre" && choixOrdinateur == "feuille") {
        resultat = "Perdu...";
        contenantResultat.innerHTML = `<p>${resultat}</p>`
    } 
}