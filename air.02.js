/*Fonctions*/
const concatString = (array, lastArgument) => {
    const stringArray = array
    let result = ""

    for (i = 0; i < stringArray.length - 1; i++) {
        if (i === stringArray.length - 2) {
            result = result + stringArray[i]
            break
        }

        result = result + stringArray[i] + lastArgument
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
const displayFullString = () => {
    const strings = isValidArguments(getArguments())

    if (!strings) {
        return
    }

    for (i = 0; i < strings.length; i++) {
        if (!isValidString(strings[i])) {
            return
        }
    }

    return console.log(concatString(strings, strings[strings.length - 1]))
}

/*Affichage du résultat*/
displayFullString()