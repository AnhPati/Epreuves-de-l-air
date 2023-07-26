/*Fonctions*/
const celebration = (word) => (`La prueba del aire se acabo. Estoy listo para el ${word} salto.`)

/*Gestion des erreurs*/
const isValidArguments = (arguments) => {
    if (arguments.length === 1) {
        return arguments
    } else {
        return console.log("Une erreur est survenue. Veuillez renseigner un seul argument.")
    }
}

const isValidString = (string) => {
    if (isNaN(parseInt(string, 10))) {
        return string.toString()
    } else {
        return console.log("Une erreur est survenue.")
    }
}

/*Parsing*/
const getArguments = () => {
    const arguments = process.argv.slice(2)
    return arguments
}

/*Résolution*/
const displayCelebration = () => {
    let word = isValidArguments(getArguments())

    if (!word) {
        return
    } else if (!isValidString(word[0])) {
        return
    }

    return console.log(celebration(word))
}

/*Affichage du résultat*/
displayCelebration()