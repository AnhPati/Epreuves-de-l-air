/*Fonctions*/
const calculator = (numbers) => {
    const numbersArray = numbers.slice(0, numbers.indexOf(numbers[numbers.length - 1]))
    let resultExpress = []
    const operator = numbers[numbers.length - 1][0]
    const operatorNumber = Number(numbers[numbers.length - 1][1])

    numbersArray.forEach((number) => {
        if (operator === "+") {
            resultExpress.push((number) + operatorNumber)
        } else if (operator === "-") {
            resultExpress.push((number) - operatorNumber)
        } else if (operator === "*") {
            resultExpress.push((number) * operatorNumber)
        } else if (operator === "/") {
            resultExpress.push((number) / operatorNumber)
        }
    })

    resultExpress.splice(resultExpress[resultExpress.length - 1], 1)

    return resultExpress.join(' ')
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
    if ((operator === "+" || operator === "-" || operator === "*" || operator === "/") && operator.length === 1) {
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
const getCalculator = () => {
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

    return console.log(calculator(numbers))
}

/*Affichage du résultat*/
getCalculator()