const router = require('express').Router()
const path = require('path')
const dirReader = require('../utils/dirReader')

router.get('/*', (req, res) => {
    const dirPath = path.join(__dirname,".." ,process.env.ROOT_DIR, req.url)
    dirReader(dirPath)
    .then(files => res.json(files))
    .catch(err => {
        console.error(err)
        res.status(500).send(`Error ${res.statusCode}: Directory not found`)
    })
})

module.exports = router