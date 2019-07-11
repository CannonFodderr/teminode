const router = require('express').Router()
const path = require('path')
const dirReader = require('../utils/dirReader')
const serverConfig = require('../config/serverConfig.json')

router.get('*', (req, res) => {
    const ext = path.extname(req.url)
    if(ext){
       return res.status(403).send("File reading is not supported")
    }
    const dirPath = path.join(__dirname,"../" ,serverConfig.ROOT_DIR, req.url)
    dirReader(dirPath)
    .then(files => res.json(files))
    .catch(err => {
        console.error(err)
        res.status(500).send(`Error ${res.statusCode}: Directory not found`)
    })
})

module.exports = router