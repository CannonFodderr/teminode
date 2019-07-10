const router = require('express').Router()

router.get('*', (req, res) => {
    res.status(404).send("Page not found")
})

module.exports = router