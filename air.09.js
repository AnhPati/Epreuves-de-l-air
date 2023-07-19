/*Fonctions*/
const shiftElement = (array) => {
    // let result = array.splice(1)
    // result.push(array[0])

    let result = []

    for (let i = 1; i < array.length; i++) {
        result.push(array[i])
    }

    result.push(array[0])

    return result
}

/*Gestion des erreurs*/
const isValidArguments = (arguments) => {

    if (arguments.length >= 2) {
        return arguments
    } else {
        return console.log("Une erreur est survenue. Veuillez renseigner au moins deux arguments.")
    }
}

/*Parsing*/
const getArguments = () => {
    const arguments = process.argv.slice(2)
    return arguments
}

/*Résolution*/
const displayShiftElement = () => {
    let arguments = isValidArguments(getArguments())

    if (!arguments) {
        return
    }

    return console.log(shiftElement(arguments))
}

/*Affichage du résultat*/
displayShiftElement()