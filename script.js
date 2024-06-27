var vitesse_valeur = 1
document.querySelector("#vitesse").addEventListener("input",() => {
    vitesse_valeur = document.querySelector("#vitesse").value
    console.log(vitesse_valeur)
})

var menu_ouvert = null

document.querySelectorAll(`#malette > nav button`).forEach((bouton) => {
    let nom = bouton.id.split('_', 3)[2]
    bouton.addEventListener(`click`, () => {
        document.querySelectorAll(`#malette > section`).forEach((onglet) => {
            if (onglet.id == `onglet_${nom}`) {
                onglet.classList.toggle('ouvert')
            } else {
                onglet.classList.toggle('ouvert', false)
            }
        })
        document.querySelectorAll(`#malette > nav button`).forEach((onglet) => {
            if (onglet.id == `bouton_onglet_${nom}`) {
                onglet.classList.toggle('selectionne')
            } else {
                onglet.classList.toggle('selectionne', false)
            }
        })
    })
})

