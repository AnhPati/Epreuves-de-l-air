/*Fonctions*/
const pyramidBuilder = (material, plan) => {
    let pyramid = []
    let stage = 1
    let space = " "
    let spacePlan = plan

    for (let i = 0; i < plan; i++) {
        pyramid.push(space.repeat((spacePlan - 1)) + material.repeat(i + stage))
        stage += 1
        spacePlan -= 1
    }
    return pyramid.join('\n')
}

/*Gestion des erreurs*/
const isValidArguments = (arguments) => {

    if (arguments.length === 2) {
        return arguments
    } else {
        return console.log("Une erreur est survenue. Veuillez renseigner deux argument.")
    }
}

const isValidElements = (arguments) => {
    if (arguments[0].length === 1 && arguments[1].length >= 1) {
        return arguments
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
const displayPyramid = () => {
    let arguments = isValidArguments(getArguments())

    if (!arguments) {
        return
    } else if (!isValidElements(arguments)) {
        return
    }

    return console.log(pyramidBuilder(arguments[0], arguments[1]))
}

/*Affichage du résultat*/
displayPyramid()