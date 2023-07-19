/*Fonctions*/
const insertSort = (numbers, number) => {
    let result = numbers
    result.splice(result.length - 1, 1)

    for (let i = 0; i < numbers.length - 1; i++) {

        if (numbers[i] > number) {
            result.splice(i, 0, number)
            break
        }
    }

    return result.join(' ')
}

/*Gestion des erreurs*/
const isValidArguments = (arguments) => {
    if (arguments.length >= 3) {
        return arguments
    } else {
        return console.log("Une erreur est survenue. Veuillez renseigner au moins trois arguments.")
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
const displayInsertSort = () => {
    { }
    let numbers = isValidArguments(getArguments())

    if (!numbers) {
        return
    }

    for (let i = 0; i < numbers.length; i++) {
        if (!isValidNumber(numbers[i])) {
            return
        } else {
            numbers[i] = isValidNumber(numbers[i])
        }
    }

    return console.log(insertSort(numbers, numbers[numbers.length - 1]))
}

/*Affichage du résultat*/
displayInsertSort()