/*Fonctions*/
const fusionSort = (firstArray, secondArray) => {
    // return firstArray.concat(secondArray).sort((a, b) => a - b).join(', ')
    let result = []
    let count = 0

    for (let i = 0; i < firstArray.length; i++) {
        for (let j = count; j < secondArray.length; j++) {
            if (firstArray[i] <= secondArray[j]) {
                result.push(firstArray[i])
                if (count > i + 1) {
                    count -= 1
                }
                break

            } else {
                result.push(secondArray[j])
                i -= 1
                count += 1
                break
            }
        }
    }

    if (firstArray.length > secondArray.length) {
        result = endFusion(result, firstArray.slice(count))
    } else if (firstArray.length < secondArray.length) {
        result = endFusion(result, secondArray.slice(count))
    }

    return result.join(' ')
}

const endFusion = (array, endArray) => {
    let result = array

    for (let i = 0; i < endArray.length; i++) {
        result.push(endArray[i])
    }

    return result
}

/*Gestion des erreurs*/
const isValidArguments = (arguments) => {

    if (arguments.length === 2) {
        return arguments
    } else {
        return console.log("Une erreur est survenue. Veuillez séparer vos deux liste d'arguments par le mot 'fusion'.")
    }
}

const isValidNumber = (number) => {
    if (!isNaN(parseInt(number, 10))) {
        return Number(number)
    } else {
        return console.log("Une erreur est survenue.")
    }
}

/*Parsing*/
const getArguments = () => {
    const arguments = process.argv.slice(2)
    let argumentsArray = arguments

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] === "fusion") {
            argumentsArray = []
            argumentsArray[0] = arguments.slice(0, i)
            argumentsArray[1] = arguments.slice(i + 1)
            break
        }
    }

    return argumentsArray
}

/*Résolution*/
const displayFusionSort = () => {
    let arguments = getArguments()

    if (!isValidArguments(arguments)) {
        return
    }

    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arguments[i].length; j++) {
            if (!isValidNumber(arguments[i][j])) {
                return
            } else {
                arguments[i][j] = isValidNumber(arguments[i][j])
            }
        }
    }

    return fusionSort(arguments[0], arguments[1])
}

/*Affichage du résultat*/
displayFusionSort()