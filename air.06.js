/*Fonctions*/
const withoutLetter = (strings, letter) => {
    let result = strings
    result.splice(result.length - 1, 1)

    for (i = 0; i < strings.length; i++) {
        for (j = 0; j < strings[i].length; j++) {
            if (strings[i][j].toLowerCase() === letter.toLowerCase()) {
                result.splice(i, 1)
                i -= 1
                break
            }
        }
    }

    return result.join(', ')
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
const displayWithoutLetter = () => {
    let strings = isValidArguments(getArguments())

    if (!strings) {
        return
    }

    for (i = 0; i < strings.length; i++) {
        if (!isValidString(strings[i])) {
            return
        }
    }

    return console.log(withoutLetter(strings, strings[strings.length - 1]))
}

/*Affichage du résultat*/
displayWithoutLetter()