const fs = require('fs')
const path = require('path')
const serverConfig = require('../config/serverConfig.json')

const checkRootFolder = () => {
    const rootFolderPath = path.join(__dirname, "../", serverConfig.ROOT_DIR)
    fs.access(rootFolderPath, (err) => {
        if(err) {
            console.error("Root folder not found...")
            fs.mkdir(rootFolderPath, (err) => {
                if(err) return console.error("Unable to create new folder: ", err)
                return console.log("New root directory created: ", serverConfig.ROOT_DIR)
            })
        }
        else console.log("API Root folder ready")
    })
}

module.exports = checkRootFolder()