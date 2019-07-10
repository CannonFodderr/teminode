require('dotenv').config()
require('./utils/initSetup')

const express = require('express')
const app = express()
const port = process.env.PORT || 9001

// Routes
const apiDirRoutes = require('./routes/apiDirRoutes')
const errorRoutes = require('./routes/errorRoutes')
const serverConfig = require('./config/serverConfig.json')

app.use(express.json())

app.use(serverConfig.API_ROUTE, apiDirRoutes)
app.use(errorRoutes)

app.listen(port, () => console.log(`Serving on port: ${port}`))