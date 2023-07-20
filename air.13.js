/*Fonctions*/
const scriptTest = () => {
    const fs = require('fs')
    const files = pathFiles()




    return files
}

const pathFolders = () => {
    const fs = require('fs');
    const path = require('path')
    const parentFolder = path.resolve(path.join('..'))
    console.log("parentFolder " + parentFolder)
    const parentFolderContent = fs.readdirSync(parentFolder, { withFileTypes: true })
    let pathFolders = []

    for (let i = 0; i < parentFolderContent.length; i++) {
        if (parentFolderContent[i].name[0] === 'E') {
            let tempPath = Object.values(parentFolderContent[i])
            pathFolders.push(path.join(parentFolder, tempPath[0]))
        }
    }

    return pathFolders
}

const pathFiles = () => {
    const fs = require('fs')
    const folders = pathFolders()

    let foldersContent = []

    for (let i = 0; i < folders.length; i++) {
        let tempFile = fs.readdirSync(folders[i], { withFileTypes: true })
        for (let j = 0; j < tempFile.length; j++) {
            if (tempFile[j].name.slice(0, 4) !== ".git") {
                foldersContent.push(tempFile[j].name)
            }
        }
    }


    return foldersContent
}

/*Gestion des erreurs*/


/*Résolution*/
const displayScriptTest = () => {


    return console.log(scriptTest())
}

/*Affichage du résultat*/
displayScriptTest()