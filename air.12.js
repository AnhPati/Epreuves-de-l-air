/*Fonctions*/
const sortArray = (array) => {
    let indexMin = 0
    let indexMax = array.length - 1
    let newArray = array

    const quickSort = (array, indexMin, indexMax) => {
        if (indexMin < indexMax) {
            let scoreIndex = score(array, indexMin, indexMax)
            quickSort(array, indexMin, scoreIndex - 1)
            quickSort(array, scoreIndex + 1, indexMax)
        }

        return array
    }

    const score = (array, indexMin, indexMax) => {
        let pivotValue = array[indexMax]
        let indexTracker = indexMin
        let tempArray = []

        for (i = indexMin; i < indexMax; i++) {
            if (array[i] < pivotValue) {
                tempArray = [array[indexTracker], array[i]]
                array[indexTracker] = tempArray[1]
                array[i] = tempArray[0]
                indexTracker = indexTracker + 1
            }
        }

        tempArray = [array[indexTracker], array[indexMax]]
        array[indexTracker] = tempArray[1]
        array[indexMax] = tempArray[0]

        return indexTracker
    }

    const result = quickSort(newArray, indexMin, indexMax)

    return result
}

/*Gestion des erreurs*/
const isValidArguments = (arguments) => {

    if (arguments.length >= 2) {
        return arguments
    } else {
        return console.log("Une erreur est survenue. Veuillez renseigner deux argument.")
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
    return arguments
}

/*Résolution*/
const displaySortArray = () => {
    let numbers = isValidArguments(getArguments())

    if (!numbers) {
        return
    }

    for (i = 0; i < numbers.length; i++) {
        if (!isValidNumber(numbers[i])) {
            return
        } else {
            numbers[i] = isValidNumber(numbers[i])
        }
    }

    return console.log(sortArray(numbers))
}

/*Affichage du résultat*/
displaySortArray()