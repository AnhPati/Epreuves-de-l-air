/*Fonctions*/
const findIntruder = (arguments) => {
    let result = arguments

    for (i = 0; i < result.length; i++) {
        for (j = 0; j < result.length; j++) {
            if (result[j] === result[i] && i !== j) {
                result.splice(j, 1)
                result.splice(i, 1)
                j = 0
                i = 0
                console.log("Result : " + result)
            }
        }
    }

    //Si jamais il y a plus d'un intrus
    if (result.length > 1) {
        result = result.join(" ")
    } else {
        result = result[0]
    }

    return result
}

/*Gestion des erreurs*/
const isValidArguments = (arguments) => {
    if (arguments.length >= 3) {
        return arguments
    } else {
        return console.log("Une erreur est survenue. Veuillez renseigner au moins trois arguments.")
    }
}

/*Parsing*/
const getArguments = () => {
    const arguments = process.argv.slice(2)
    return arguments
}

/*Résolution*/
const displayFindIntruder = () => {
    const arguments = isValidArguments(getArguments())

    if (!arguments) {
        return
    }

    return console.log(findIntruder(arguments))
}

/*Affichage du résultat*/
displayFindIntruder()