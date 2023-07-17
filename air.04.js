/*Fonctions*/
const singleConsecutiveLetter = (string) => {
    let result = []

    for (i = 0; i < string.length; i++) {
        if (string[i] !== string[i - 1]) {
            result.push(string[i])
        }
    }

    return result.join('')
}

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
const displaySingleConsecutiveLetter = () => {
    const string = isValidArguments(getArguments())

    if (!string) {
        return
    } else if (!isValidString(string)) {
        return
    }

    return console.log(singleConsecutiveLetter(string[0]))
}

/*Affichage du résultat*/
displaySingleConsecutiveLetter()