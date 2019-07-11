# Temi Node

Folder drilling service API

## Setup

* npm install
* **optional** - Create .env file with variables:
    * PORT - Server listening port
* **optional** - change API_ROUTE & ROOT_DIR in config/serverConfig.json
* **optional** - change cache ttl in config/chachConfig.json - 10 sec by default
* npm start / nodemon
    * Server will respond with status 500 on missing directories.
    * Server will check for the api root folder and try to create it if needed.
    * Server will allow directory drilldown only, file extensions will be forbbiden.