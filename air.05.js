/*Fonctions*/
const mathOperations = (numbers, operation) => {
    let result = []
    let calcul = [operation.slice(0, 1), Number(operation.slice(1))]

    for (i = 0; i < numbers.length - 1; i++) {
        if (calcul[0] === "+") {
            result.push((numbers[i]) + calcul[1])
        } else if (calcul[0] === "-") {
            result.push((numbers[i]) - calcul[1])
        } else if (calcul[0] === "*") {
            result.push((numbers[i]) * calcul[1])
        } else if (calcul[0] === "/") {
            result.push((numbers[i]) / calcul[1])
        }
    }

    return result.join(' ')
}

/*Gestion des erreurs*/
const isValidArguments = (arguments) => {
    if (arguments.length >= 2) {
        return arguments
    } else {
        return console.log("Une erreur est survenue. Veuillez renseigner au moins deux arguments.")
    }
}

const isValidNumber = (number) => {
    if (!isNaN(parseInt(number, 10))) {
        return Number(number)
    } else {
        return console.log("Une erreur est survenue.")
    }
}

const isValidOperator = (operator) => {
    if (operator === "+" || operator === "-" || operator === "*" || operator === "/") {
        return operator
    } else {
        return console.log("L'opérateur n'est pas valide.")
    }
}

/*Parsing*/
const getArguments = () => {
    const arguments = process.argv.slice(2)
    return arguments
}

/*Résolution*/
const getMathOperations = () => {
    let numbers = isValidArguments(getArguments())

    if (!numbers) {
        return
    } else if (!isValidOperator(numbers[numbers.length - 1][0])) {
        return
    }

    for (i = 0; i < numbers.length - 1; i++) {
        if (!isValidNumber(numbers[i])) {
            return
        } else {
            numbers[i] = isValidNumber(numbers[i])
        }
    }

    return console.log(mathOperations(numbers, numbers[numbers.length - 1]))
}

/*Affichage du résultat*/
getMathOperations()