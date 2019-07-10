require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 9001

// Routes
const apiDirRoutes = require('./routes/apiDirRoutes')
const errorRoutes = require('./routes/errorRoutes')

app.use(express.json())

app.use(process.env.API_ROUTE, apiDirRoutes)
app.use(errorRoutes)

app.listen(port, () => console.log(`Serving on port: ${port}`))