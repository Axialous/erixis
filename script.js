

var vitesse_valeur = 1
document.querySelector("#vitesse").addEventListener("input",() => {
    vitesse_valeur = document.querySelector("#vitesse").value
    console.log(vitesse_valeur)
})