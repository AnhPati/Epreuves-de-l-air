/*Fonctions*/
const cutWithWord = (string, word) => {
    // return string.split(word)
    let stringArray = cutWithSpace(string)
    index = 0
    let result = []

    for (i = 0; i < stringArray.length; i++) {
        if (stringArray[i] === word) {
            result.push(stringArray.slice(index, i))
            index = i + 1
        }
    }

    result.push(stringArray.slice(index))

    return result
}

const cutWithSpace = (string) => {
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
    if (arguments.length === 2) {
        return arguments
    } else {
        return console.log("Une erreur est survenue. Veuillez renseigner deux arguments.")
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
const displayCutWithWord = () => {
    const string = isValidArguments(getArguments())

    if (!string) {
        return
    }

    for (i = 0; i < string.length; i++) {
        if (!isValidString(string[i])) {
            return
        }
    }

    const stringArray = cutWithWord(string[0], string[1])

    for (i = 0; i < stringArray.length; i++) {
        console.log(stringArray[i].join(" "))
    }
}

/*Affichage du résultat*/
displayCutWithWord()