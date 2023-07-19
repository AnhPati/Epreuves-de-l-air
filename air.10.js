/*Fonctions*/
const fileData = (fileName) => {
    const fs = require('fs')
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            return console.error(err)
        }

        return console.log(data)
    })
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
const displayFileData = () => {
    let fileName = isValidArguments(getArguments())

    if (!fileName) {
        return
    } else if (!isValidString) {
        return
    }

    return fileData(fileName[0])
}

/*Affichage du résultat*/
displayFileData()