/*Fonctions*/
const cutString = (string) => {
    // const whitespacesRegExp = /\s/g
    // return string.split(whitespacesRegExp)
    let stringArray = []
    let index = 0

    for (i = 0; i < string.length; i++) {
        if (string[i] === " " || string[i] === "\n" || string[i] === "\u0009") {
            stringArray.push(string.slice(index, i))
            index = i + 1
        }
    }

    stringArray.push(string.slice(index))

    return stringArray
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
    if (isNaN(string)) {
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
const displayCutString = () => {
    const string = isValidArguments(getArguments())

    if (!string) {
        return
    } else if (!isValidString(string)) {
        return
    }

    const stringArray = cutString(string)

    for (i = 0; i < stringArray.length; i++) {
        console.log(stringArray[i])
    }
}

/*Affichage du résultat*/
displayCutString()